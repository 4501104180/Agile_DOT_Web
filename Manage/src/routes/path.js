const path = (root, sublink) => {
    return `${root}${sublink}`;
};

const ROOT_DASHBOARD = '/dashboard';
const ROOT_CATEGORY = '/category';
const ROOT_ACCOUNT = '/account';
const ROOT_PRODUCT = '/product';
export const PATH_DASHBOARD = {
    root: ROOT_DASHBOARD,
    category: {
        root: ROOT_CATEGORY,
        list: path(ROOT_CATEGORY, '/list'),
        create: path(ROOT_CATEGORY, '/new'),
        styles: path(ROOT_CATEGORY, '/styles')
    },
    account: {
        root: ROOT_ACCOUNT,
        list: path(ROOT_ACCOUNT, '/list'),
        create: path(ROOT_ACCOUNT, '/new')
    },
    product: {
        root: ROOT_PRODUCT,
        list: path(ROOT_PRODUCT, '/list'),
        create: path(ROOT_PRODUCT, '/new')
    }
};
