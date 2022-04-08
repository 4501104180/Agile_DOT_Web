const path = (root, sublink) => {
    return `${root}${sublink}`;
};
export const ROOT_EXTERNAL = process.env.REACT_APP_MANAGE_URL;

const ROOT_AUTH = '/auth';

export const PATH_AUTH = {
    root: ROOT_AUTH,
    login: path(ROOT_AUTH, '/login')
};

export const PATH_PAGE = {
    home: '/',
    cart: '/cart'
};