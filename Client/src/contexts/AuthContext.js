import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';

// apis
import accountApi from '../apis/accountApi';
// slices
import { getCart, deleteCart } from '../redux/slices/cart';
// utils
import { getToken, setToken, isValidToken } from '../utils/jwt';

const initialState = {
    isInitialized: false,
    isAuthenticated: false
};

const handlers = {
    INITIALIZE: (state, action) => {
        const isAuthenticated = action.payload;
        return {
            ...state,
            isInitialized: true,
            isAuthenticated
        }
    },
    LOGIN: (state) => {
        return {
            ...state,
            isAuthenticated: true
        }
    },
    LOGOUT: (state) => {
        return {
            ...state,
            isAuthenticated: false
        }
    }
};

const reducer = (state, action) => handlers[action.type] ? handlers[action.type](state, action) : state;

const propTypes = {
    children: PropTypes.node
};

const AuthContext = createContext({
    ...initialState,
    login: () => Promise.resolve(),
    register: () => Promise.resolve(),
    logout: () => Promise.resolve()
});

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const dispatchSlice = useDispatch();
    useEffect(() => {
        const initialize = async () => {
            try {
                const tokens = getToken();
                setToken(tokens);
                const isAuthenticated = await isValidToken(tokens);
                if (isAuthenticated) {
                    await dispatchSlice(getCart());
                }
                dispatch({
                    type: 'INITIALIZE',
                    payload: isAuthenticated
                });
            } catch (error) {
                console.log(error);
            }
        };
        initialize();
    }, [dispatchSlice]);
    const login = async (email, password) => {
        const res = await accountApi.login(email, password);
        const { tokens } = res;
        setToken(tokens);
        await dispatchSlice(getCart());
        dispatch({
            type: 'LOGIN'
        });
    };
    const register = async (name, email, password, passwordConfirm) => {
        return await accountApi.register(name, email, password, passwordConfirm);
    };
    const logout = async () => {
        setToken(null);
        dispatch({
            type: 'LOGOUT'
        });
        dispatchSlice(deleteCart());
    };
    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                register,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = propTypes;

export { AuthProvider, AuthContext };
