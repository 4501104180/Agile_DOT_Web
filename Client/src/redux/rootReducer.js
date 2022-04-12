import { combineReducers } from 'redux';

// slices
import cartReducer from './slices/cart';
import snackbarReducer from './slices/snackbar';
import dialogReducer from './slices/dialog';

const rootReducer = combineReducers({
    cart: cartReducer,
    snackbar: snackbarReducer,
    dialog: dialogReducer
});

export { rootReducer };
