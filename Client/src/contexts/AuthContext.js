import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

const initialState = {
    isInitialized: false
};

const handlers = {
    INITIALIZE: (state, action) => {
        return {
            isInitialized: true
        }
    }
};

const reducer = (state, action) => handlers[action.type] ? handlers[action.type](state, action) : state;

const propTypes = {
    children: PropTypes.node
};

const AuthContext = createContext({
    ...initialState
});

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const initialize = async () => {
            try {
                dispatch({
                    type: 'INITIALIZE'
                });
            } catch (error) {
                console.log(error);
            }
        };
        initialize();
    }, []);
    return (
        <AuthContext.Provider
            value={{
                ...state
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = propTypes;

export { AuthProvider, AuthContext };
