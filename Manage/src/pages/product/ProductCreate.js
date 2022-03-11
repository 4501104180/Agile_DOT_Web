import { Container } from '@mui/material';

// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { ProductForm } from '../../components/product';
// path
import { PATH_DASHBOARD } from '../../routes/path';

const ProductCreate = () => {
    return (
        <Page title='Create new Product'>
            <Container sx={{ pb: 3 }}>
                <HeaderBreadcrumbs
                    header='Create Product'
                    links={[
                        { name: 'Dashboard', href: PATH_DASHBOARD.root },
                        { name: 'Products', href: PATH_DASHBOARD.product.list },
                    ]}
                />
                <ProductForm />
            </Container>
        </Page>
    );
};

export default ProductCreate;
