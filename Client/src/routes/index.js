import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/main';
import AuthLayout from '../layouts/authentication';
import CheckoutLayout from '../layouts/checkout';
import Loading from '../pages/Loading';

const Router = () => (
    <Suspense fallback={<Loading />}>
        <Switch>
            <Route path='/auth/:slugAuth' exact>
                <AuthLayout>
                    <Switch>
                        <Route path='/auth/login' exact component={Login} />
                        <Route path='/auth/register' exact component={Register} />
                    </Switch>
                </AuthLayout>
            </Route>
            <Route path='/checkout/:slugCheckout' exact>
                <CheckoutLayout>
                    <Switch>
                        <Route path='/checkout/shipping' exact component={Shipping} />
                        <Route path='/checkout/payment' exact component={Payment} />
                    </Switch>
                </CheckoutLayout>
            </Route>
            <Route>
                <MainLayout>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/cart' exact component={Cart} />
                        <Route path='/profile' exact component={Profile} />
                        <Route path='/:slugProduct/pid:slugId' exact render={props => <Detail {...props} key={Date.now()} />} />
                        <Route path='/:slugCategory/cid:slugId' exact render={props => <Categories {...props} key={Date.now()} />} />
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
const Categories = lazy(() => import('../pages/Categories'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Detail = lazy(() => import('../pages/product/Detail'));
const Profile = lazy(() => import('../pages/AccountForm'));
// Authentication
const Login = lazy(() => import('../pages/authentication/Login'));
const Register = lazy(() => import('../pages/authentication/Register'));

// Checkout
const Shipping = lazy(() => import('../pages/checkout/Shipping'));
const Payment = lazy(() => import('../pages/checkout/Payment'));
