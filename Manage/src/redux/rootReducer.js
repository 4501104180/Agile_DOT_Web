import { combineReducers } from 'redux';

// slices
import snackbarReducer from './slices/snackbar';
import productReducer from './slices/product';

const rootReducer = combineReducers({
    snackbar: snackbarReducer,
    product: productReducer
});

export { rootReducer };
