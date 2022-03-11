import axiosInstance from './axiosInstance';

const accountApi = {
    // [POST] /accounts
    insert: body => {
        const url = '/accounts';
        return axiosInstance.post(url, body);
    },
};

export default accountApi;
