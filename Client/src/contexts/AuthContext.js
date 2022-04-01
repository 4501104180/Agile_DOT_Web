import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

// apis
import accountApi from '../apis/accountApi';
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
    logout: () => Promise.resolve()
});

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const initialize = async () => {
            try {
                const tokens = getToken();
                setToken(tokens);
                const isAuthenticated = await isValidToken(tokens);
                if (isAuthenticated) {
                    // 
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
    }, []);
    const login = async (email, password) => {
        const tokens = await accountApi.login(email, password);
        setToken(tokens);
        // 
        dispatch({
            type: 'LOGIN'
        });
    };
    const logout = async () => {
        setToken(null);
        dispatch({
            type: 'LOGOUT'
        });
    };
    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = propTypes;

export { AuthProvider, AuthContext };
