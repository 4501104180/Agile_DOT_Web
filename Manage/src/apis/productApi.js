import axiosInstance from './axiosInstance';

const productApi = {
    // [GET] /products
    findAll: () => {
        const url = '/products';
        return axiosInstance.get(url);
    },

    // [POST] /products
    insert: body => {
        const url = '/products';
        return axiosInstance.post(url, body);
    },

    // [PUT] /products/:productId
    edit: (productId, body) => {
        const url = `/products/${productId}`;
        return axiosInstance.put(url, body);
    },

    // [DELETE] products/:productId
    deleteById: productId => {
        const url = `/products/${productId}`;
        return axiosInstance.delete(url);
    },

    // [PATCH] products
    deleteAll: productIds => {
        const url = '/products';
        return axiosInstance.patch(url, {
            productIds
        });
    },

    // [PATCH] products/restore/:productId
    restoreById: productId => {
        const url = `/products/restore/${productId}`;
        return axiosInstance.patch(url);
    }
};

export default productApi;
