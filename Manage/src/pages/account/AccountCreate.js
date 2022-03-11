import { Container } from '@mui/material';

// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { AccountForm } from '../../components/account';
// path
import { PATH_DASHBOARD } from '../../routes/path';

const AccountCreate = () => {
    return (
        <Page title='Create new Account'>
            <Container sx={{ pb: 3 }}>
                <HeaderBreadcrumbs
                    header='Create Account'
                    links={[
                        { name: 'Dashboard', href: PATH_DASHBOARD.root },
                        { name: 'Accounts', href: PATH_DASHBOARD.account.list },
                    ]}
                />
                <AccountForm />
            </Container>
        </Page>
    );
};

export default AccountCreate;
