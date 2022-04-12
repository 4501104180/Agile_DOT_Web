import axiosInstance from './axiosInstance';

const accountApi = {
    // [GET] /accounts/checkExist/:email
    checkExist: (email) => {
        const url = `/accounts/checkExist/${email}`;
        return axiosInstance.get(url);
    },

    // [POST] /accounts/login
    login: (email, password) => {
        const url = '/accounts/login';
        return axiosInstance.post(url, {
            email,
            password
        });
    },

    // [POST] /accounts/register
    register: (name, email, password, passwordConfirm) => {
        const url = '/accounts/register';
        return axiosInstance.post(url, {
            name,
            email,
            password,
            passwordConfirm
        });
    }
};

export default accountApi;
