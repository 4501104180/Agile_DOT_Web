import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// apis
import productApi from '../../apis/productApi';
// slices
import { initSnackbar } from '../../redux/slices/snackbar';

const initialState = {
    products: null
};

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const products = await productApi.findAll();
    return products;
});

const slice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        insertSuccess: (state, action) => {
            state.products = [...state.products, action.payload];
        },
        editSuccess: (state, action) => {
            const { _id, ...newBody } = action.payload;
            state.products = state.products.map(product => product._id === _id ? { ...product, ...newBody } : product);
        },
        deleteOneSuccess: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload);
        },
        deleteMultipleSuccess: (state, action) => {
            state.products = state.products.filter(product => !action.payload.includes(product._id));
        },
        restoreSuccess: (state, action) => {
            state.products = [...state.products, action.payload];
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addDefaultCase(state => state)
    }
});

export const {
    restoreSuccess,
    insertSuccess,
    editSuccess
} = slice.actions;
export default slice.reducer;

export const deleteProduct = params => async dispatch => {
    try {
        const res = await productApi.deleteById(params);
        const { statusText, message, productId } = res;
        if (statusText === 'success') {
            dispatch(slice.actions.deleteOneSuccess(productId));
        }
        dispatch(initSnackbar({
            isOpen: true,
            type: statusText,
            message: message,
            anchor: 'bottom-center'
        }));
    } catch (error) {
        console.log(error);
    }
};

export const deleteProducts = params => async dispatch => {
    try {
        const res = await productApi.deleteAll(params);
        const { statusText, message, productIds } = res;
        if (statusText === 'success') {
            dispatch(slice.actions.deleteMultipleSuccess(productIds));
        }
        dispatch(initSnackbar({
            isOpen: true,
            type: statusText,
            message: message,
            anchor: 'bottom-center'
        }));
    } catch (error) {
        console.log(error);
    }
};
