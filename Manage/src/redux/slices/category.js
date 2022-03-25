import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// apis
import categoryApi from '../../apis/categoryApi';
// slices
import { initSnackbar } from '../../redux/slices/snackbar';

const initialState = {
    categories: null
};

// Gọi hàm này thì categories state ở trên = categories api trả về ở dưới hàm này
export const getCategories = createAsyncThunk('categories/getCategories', async () => {
    const categories = await categoryApi.findAll();
    return categories;
});

const slice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        insertSuccess: (state, action) => {
            state.categories = [...state.categories, action.payload];
        },
        editSuccess: (state, action) => {
            const { _id, ...newBody } = action.payload;
            state.categories = state.categories.map(category => category._id === _id ? { ...category, ...newBody } : category);
        },
        deleteOneSuccess: (state, action) => {
            state.categories = state.categories.filter(category => category._id.toString() !== action.payload);
        },
        deleteMultipleSuccess: (state, action) => {
            state.categories = state.categories.filter(category => !action.payload.includes(category._id));
        },
        restoreSuccess: (state, action) => {
            state.categories = [...state.categories, action.payload];
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
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

export const deleteCategory = params => async dispatch => {
    try {
        const res = await categoryApi.deleteCategorybyID(params);
        const { status, message, categoryID } = res;
        if (status === 'success') {
            dispatch(slice.actions.deleteOneSuccess(categoryID));
        }
        dispatch(initSnackbar({
            isOpen: true,
            type: status,
            message: message,
            anchor: 'bottom-center'
        }));
    } catch (error) {
        console.log(error);
    }
};

export const deleteCategories = params => async dispatch => {
    try {
        const res = await categoryApi.deletedCategoryAll(params);
        const { status, message, categoryIDs } = res;
        if (status === 'success') {
            dispatch(slice.actions.deleteMultipleSuccess(categoryIDs));
        }
        dispatch(initSnackbar({
            isOpen: true,
            type: status,
            message: message,
            anchor: 'bottom-center'
        }));
    } catch (error) {
        console.log(error);
    }
};
