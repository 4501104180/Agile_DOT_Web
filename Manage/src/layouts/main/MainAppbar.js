import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import { ListOutlined, ZoomOutMap } from '@mui/icons-material';

// components
import Hidden from '../../components/Hidden';
import AvatarBadge from '../../components/AvatarBadge';
// 
import NotificationsPopover from './NotificationsPopover';

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const propTypes = {
    onOpenSidebar: PropTypes.func
};

const MainAppbar = ({ onOpenSidebar }) => {
    return (
        <RootStyle>
            <ToolbarStyle>
                <Hidden width='lgUp'>
                    <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
                        <ListOutlined />
                    </IconButton>
                </Hidden>
                <Box sx={{ flexGrow: 1 }} />
                <Stack
                    spacing={2}
                    direction='row'
                    alignItems='center'
                >
                    <IconButton>
                        <ZoomOutMap />
                    </IconButton>
                    <NotificationsPopover />
                    <AvatarBadge
                        status='online'
                        src='Nguyen Van A'
                        image='https://timviec365.vn/pictures/images/admin-officer-la-gi4.png'
                        sx={{
                            width: '50px',
                            height: '50px',
                            cursor: 'pointer'
                        }}
                    />
                </Stack>
            </ToolbarStyle>
        </RootStyle>
    );
};

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    backgroundColor: alpha(theme.palette.background.default, 0.72),
    [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
    }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: APPBAR_DESKTOP,
        padding: theme.spacing(0, 5)
    }
}));

MainAppbar.propTypes = propTypes;

export default MainAppbar;
