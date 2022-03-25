import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { CategoryForm } from '../../components/category';
// path
import { PATH_DASHBOARD } from '../../routes/path';

const CategoryCreate = () => {
    const { pathname } = useLocation();
    const isEdit = pathname.includes('edit');
    const { categories } = useSelector(state => state.category);
    const category = categories.find(category => category && category.slug === pathname.split('/').pop());
    return (
        <Page title={`${category?.title || 'Create new Category'}`}>
            <Container sx={{ pb: 3 }}>
                <HeaderBreadcrumbs
                    header={!isEdit? 'Create Category' : category ? category.title : ''}
                    links={[
                        { name: 'Dashboard', href: PATH_DASHBOARD.root },
                        { name: 'Categoryies', href: PATH_DASHBOARD.category.list },
                    ]}
                />
                <CategoryForm isEdit={isEdit} category={category}/>
            </Container>
        </Page>
    );
};

export default CategoryCreate;
