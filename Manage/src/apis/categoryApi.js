import axiosInstance from './axiosInstance';

const categoryApi = {
    // [GET] /categories
    findAll: () => {
        const url = '/categories';
        return axiosInstance.get(url);
    },

    // [POST] /categories
    insert: body => {
        const url = '/categories';
        return axiosInstance.post(url, body);
    }
};

export default categoryApi;
