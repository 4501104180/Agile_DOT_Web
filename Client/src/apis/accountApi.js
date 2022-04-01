import axiosInstance from './axiosInstance';

const accountApi = {
    // [POST] /accounts/login
    login: (email, password) => {
        const url = '/accounts/login';
        return axiosInstance.post(url, {
            email,
            password
        });
    }
};

export default accountApi;
