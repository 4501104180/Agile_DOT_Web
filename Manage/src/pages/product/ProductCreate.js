import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';

// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { ProductForm } from '../../components/product';
// path
import { PATH_DASHBOARD } from '../../routes/path';

const ProductCreate = () => {
    const { pathname } = useLocation();
    const isEdit = pathname.includes('edit');
    const { products } = useSelector(state => state.product);
    const product = products.find(product => product.slug === pathname.split('/').pop());
    return (
        <Page title={`${product?.name || 'Create product'} | D.O.T`}>
            <Container sx={{ pb: 3 }}>
                <HeaderBreadcrumbs
                    header={!isEdit ? 'Create product' : product ? product.name : ''}
                    links={[
                        { name: 'Dashboard', href: PATH_DASHBOARD.root },
                        { name: 'Products', href: PATH_DASHBOARD.product.list },
                    ]}
                />
                <ProductForm isEdit={isEdit} product={product} />
            </Container>
        </Page>
    );
};

export default ProductCreate;
