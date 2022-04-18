import axiosInstance from './axiosInstance';

const accountApi = {
    // [GET] /accounts/checkExist/:email
    checkExist: (email) => {
        const url = `/accounts/checkExist/${email}`;
        return axiosInstance.get(url);
    },

    // [GET] /accounts/profile
    getProfile: () => {
        const url = '/accounts/profile';
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
    },
    edit: (id, body) => {
        const url = `/accounts/${id}`;
        return axiosInstance.put(url, body);
    },
};

export default accountApi;
