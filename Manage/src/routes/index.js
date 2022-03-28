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
                    path: "category",
                    children: [
                      { path: "", element: <Navigate to="/category/list" replace /> },
                      { path: "list", element: <Categories /> },
                      { path: "new", element: <CategoryCreate /> },
                      { path: 'edit/:slugCategory', element: <CategoryCreate /> },
                    ],
                },
                {
                    path: "account",
                    children: [
                      { path: "", element: <Navigate to="/account/list" replace /> },
                      { path: "list", element: <Accounts /> },
                      { path: "new", element: <AccountCreate /> },
                      { path: "edit/:accountId", element: <AccountCreate /> },
                    ],
                  },
                {
                    path: 'product',
                    children: [
                        { path: '', element: <Navigate to='/product/list' replace /> },
                        { path: 'list', element: <Products /> },
                        { path: 'new', element: <ProductCreate /> },
                        { path: 'edit/:productSlug', element: <ProductCreate /> }
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
const Categories = Loadable(lazy(() => import("../pages/category/Categories")));
const CategoryCreate = Loadable(lazy(() => import("../pages/category/CategoryCreate")));
// Account
const Accounts = Loadable(lazy(() => import("../pages/account/Accounts")));
const AccountCreate = Loadable(
  lazy(() => import("../pages/account/AccountCreate"))
);

// Product
const Products = Loadable(lazy(() => import('../pages/product/Products')));
const ProductCreate = Loadable(lazy(() => import('../pages/product/ProductCreate')));
