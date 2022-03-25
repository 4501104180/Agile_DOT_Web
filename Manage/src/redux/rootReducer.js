import { combineReducers } from 'redux';

// slices
import snackbarReducer from './slices/snackbar';
import productReducer from './slices/product';
import categoryReducer from './slices/category';

const rootReducer = combineReducers({
    snackbar: snackbarReducer,
    product: productReducer,
    category: categoryReducer
});

export { rootReducer };
