import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/main';
import Loading from '../pages/Loading';

const Router = () => (
    <Suspense fallback={<Loading />}>
        <Switch>
            <Route>
                <MainLayout>
                    <Switch>
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
const Cart = lazy(() => import('../pages/Cart'));
const NotFound = lazy(() => import('../pages/NotFound'));
