import { Container } from '@mui/material';

// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { CategoryForm } from '../../components/category';
// path
import { PATH_DASHBOARD } from '../../routes/path';

const CategoryCreate = () => {
    return (
        <Page title='Create new Category'>
            <Container sx={{ pb: 3 }}>
                <HeaderBreadcrumbs
                    header='Create Category'
                    links={[
                        { name: 'Dashboard', href: PATH_DASHBOARD.root },
                        { name: 'Categoryies', href: PATH_DASHBOARD.category.list },
                    ]}
                />
                <CategoryForm />
            </Container>
        </Page>
    );
};

export default CategoryCreate;
