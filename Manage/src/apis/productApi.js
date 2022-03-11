import axiosInstance from './axiosInstance';

const productApi = {
    // [POST] /products
    insert: body => {
        const url = '/products';
        return axiosInstance.post(url, body);
    },
};

export default productApi;
