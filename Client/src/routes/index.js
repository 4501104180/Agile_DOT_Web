import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/main';
import AuthLayout from '../layouts/authentication';
import Loading from '../pages/Loading';

const Router = () => (
    <Suspense fallback={<Loading />}>
        <Switch>
            <Route path='/auth/:slugAuth' exact>
                <AuthLayout>
                    <Switch>
                        <Route path='/auth/login' exact component={Login} />
                    </Switch>
                </AuthLayout>
            </Route>
            <Route>
                <MainLayout>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/cart' exact component={Cart} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </MainLayout>
            </Route>
        </Switch>
    </Suspense>
);

export default Router;

// Main
const Home = lazy(() => import('../pages/Home'));
const Cart = lazy(() => import('../pages/Cart'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Authentication
const Login = lazy(() => import('../pages/authentication/Login'));
