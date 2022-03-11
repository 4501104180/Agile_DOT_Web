import { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

// components
import LoadingScreen from '../components/LoadingScreen';
// layouts
import MainLayout from '../layouts/main';

const Loadable = Component => props => {
    return (
        <Suspense
            fallback={<LoadingScreen />}
        >
            <Component {...props} />
        </Suspense>
    );
};

const Router = () => {
    return useRoutes([
        // Main routes
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '', element: <Navigate to='/dashboard' replace /> },
                { path: 'dashboard', element: <Dashboard /> },
                {
                    path: 'category',
                    children: [
                        { path: '', element: <Navigate to='/category/list' replace /> },
                        { path: 'list', element: <Categories /> },
                        { path: 'new', element: <CategoryCreate /> },
                        { path: 'styles', element: <CategoryStyles /> },
                        { path: ':slugCategory', element: <CategoryDetail /> },
                    ]
                },
                {
                    path: 'account',
                    children: [
                        { path: '', element: <Navigate to='/account/list' replace /> },
                        { path: 'list', element: <Accounts /> },
                        { path: 'new', element: <AccountCreate /> },
                        { path: ':emailAccount', element: <AccountDetail /> },
                    ]
                },
                {
                    path: 'product',
                    children: [
                        { path: '', element: <Navigate to='/product/list' replace /> },
                        { path: 'list', element: <Products /> },
                        { path: 'new', element: <ProductCreate /> },
                        { path: ':nameProduct', element: <ProductDetail /> },
                    ]
                }
            ]
        }
    ]);
};

export default Router;

// Main
const Dashboard = Loadable(lazy(() => import('../pages/Dashboard')));

// Category
const Categories = Loadable(lazy(() => import('../pages/category/Categories')));
const CategoryCreate = Loadable(lazy(() => import('../pages/category/CategoryCreate')));
const CategoryDetail = Loadable(lazy(() => import('../pages/category/CategoryDetail')));
const CategoryStyles = Loadable(lazy(() => import('../pages/category/CategoryStyles')));
// Account
const Accounts = Loadable(lazy(() => import('../pages/account/Accounts')));
const AccountCreate = Loadable(lazy(() => import('../pages/account/AccountCreate')));
const AccountDetail = Loadable(lazy(() => import('../pages/account/AccountDetail')));

// Product
const Products = Loadable(lazy(() => import('../pages/product/Products')));
const ProductCreate = Loadable(lazy(() => import('../pages/product/ProductCreate')));
const ProductDetail = Loadable(lazy(() => import('../pages/product/ProductDetail')));