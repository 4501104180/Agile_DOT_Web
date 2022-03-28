import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Link, Stack } from '@mui/material';

const HeaderTop = () => {
    return (
        <>
            <Stack
                direction='row'
                justifyContent='space-between'
                sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
            >
                <Stack direction='row' justifyContent='space-between'>
                    <Linking component={RouterLink} to={{ pathname: 'https://www.facebook.com/exe.shiro' }} target='_blank'>
                        <i className="bi bi-file-arrow-down"></i> Download app
                    </Linking>
                    <Linking component={RouterLink} to={{ pathname: 'https://www.facebook.com/exe.shiro' }} target='_blank'>
                        <i className="bi bi-code-slash"></i> Connect
                    </Linking>
                </Stack>
                <Stack direction='row' justifyContent='space-between'>
                    {/* <NotifycationPopover /> */}
                    <Linking component={RouterLink} to={{ pathname: 'https://www.facebook.com/exe.shiro' }} target='_blank'>
                        <i className="bi bi-bell"></i> Notification
                    </Linking>
                    <Linking component={RouterLink} to={{ pathname: 'https://www.facebook.com/exe.shiro' }} target='_blank'>
                        <i className="bi bi-question-circle"></i> Support
                    </Linking>
                    <Linking
                        component={RouterLink}
                        to='https://www.facebook.com/exe.shiro'
                        sx={{ ml: '20px', borderRight: '1px solid #ccc' }}
                    >
                        Sign in
                    </Linking>
                    <Linking
                        component={RouterLink}
                        to='https://www.facebook.com/exe.shiro'
                    >
                        Sign up
                    </Linking>
                </Stack>
            </Stack >
            <Label
                sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}
            >
                <i className="bi bi-list"></i>
            </Label>
        </>
    );
};

const Linking = styled(Link)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    padding: '0px 10px',
    fontWeight: '500',
    transition: '0.3s',
    fontSize: '13px',
    borderBottom: '1px solid transparent',
    '&:hover': {
        color: theme.palette.error.main,
        borderBottom: `1px solid ${theme.palette.error.main}`
    }
}));

const Label = styled('span')(({ theme }) => ({
    padding: '0px 10px',
    fontWeight: '500',
    transition: '0.3s',
    fontSize: '14px',
    cursor: 'pointer',
    borderBottom: '1px solid transparent',
    '&:hover': {
        color: theme.palette.error.main,
        borderBottom: `1px solid ${theme.palette.error.main}`
    }
}));

export default HeaderTop;
