import { combineReducers } from 'redux';

// slices
import cartReducer from './slices/cart';
import userReducer from './slices/user';
import snackbarReducer from './slices/snackbar';
import dialogReducer from './slices/dialog';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    snackbar: snackbarReducer,
    dialog: dialogReducer
});

export { rootReducer };
