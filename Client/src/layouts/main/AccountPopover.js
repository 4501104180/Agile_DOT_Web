import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Link, Stack, Divider, MenuItem, ListItemIcon } from '@mui/material';
import { AssignmentIndOutlined, SwitchAccountOutlined, LogoutOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux'

import { PATH_AUTH, PATH_PAGE } from '../../routes/path';
import AvatarBadge from '../../components/AvatarBadge';
import MainPopover from '../../components/MainPopover';

const propTypes = {
    logout: PropTypes.func
};

// const MENU_OPTIONS = [
//     {
//         label: 'My Profile',
//         icon: <AssignmentIndOutlined />,
//         linkTo: '/profile'
//     },
//     {
//         label: 'My Ordered',
//         icon: <AssignmentOutlined />,
//         linkTo: '/ordered'
//     }
// ];

const AccountPopover = ({ logout }) => {
    const { user } = useSelector(state => state.user);
    const history = useHistory();
    const anchorNotify = useRef(null);
    const [openedPopover, setOpenedPopover] = useState(false);

    const popoverEnter = () => {
        setOpenedPopover(true);
    };
    const popoverLeave = () => {
        setOpenedPopover(false);
    };

    const handleLogout = async type => {
        try {
            await logout();
            type === 'switch' && history.replace(PATH_AUTH.login);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Label
                ref={anchorNotify}
                onMouseEnter={popoverEnter}
                onMouseLeave={popoverLeave}
            >
                {user.email} &nbsp;
                <i className="bi bi-caret-down"></i>
            </Label>
            <MainPopover
                open={openedPopover}
                anchorEl={anchorNotify.current}
                anchorVer="bottom"
                anchorHor="right"
                transformVer="top"
                transformHor="right"
                onMouseEnter={popoverEnter}
                onMouseLeave={popoverLeave}
            >
                <Stack
                    sx={{ width: '250px', p: 2 }}
                >
                    <AvatarBadge
                        status='online'
                        width={70}
                        height={70}
                        sx={{ mb: 2, mx: 'auto' }}
                    />
                    {/* {MENU_OPTIONS.map(menu => (
                        <MenuItem key={menu.label} sx={{ fontSize: '14px' }}>
                            <ListItemIcon>
                                {menu.icon}
                            </ListItemIcon>
                            {menu.label}
                        </MenuItem>
                    ))} */}
                     <MenuItem  sx={{ fontSize: '14px' }}>
                        <ListItemIcon>
                            <AssignmentIndOutlined />
                        </ListItemIcon> 
                        <Linking component={RouterLink} to={{ pathname: PATH_PAGE.profile }} target='_blank' >
                            My Profile
                        </Linking>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => handleLogout('switch')} sx={{ fontSize: '14px' }}>
                        <ListItemIcon>
                            <SwitchAccountOutlined />
                        </ListItemIcon>
                        Switch account
                    </MenuItem>
                    <MenuItem onClick={() => handleLogout('out')} sx={{ fontSize: '14px' }}>
                        <ListItemIcon>
                            <LogoutOutlined />
                        </ListItemIcon>
                        Log out
                    </MenuItem>
                </Stack>
            </MainPopover>
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

}));
const Label = styled('span')({
    padding: '0px 10px',
    fontWeight: '500',
    transition: '0.3s',
    fontSize: '14px',
    cursor: 'pointer',
    borderBottom: '1px solid transparent',
    '&:hover': {
        color: '#f53d2d',
        borderBottom: '1px solid #f53d2d'
    }
});

AccountPopover.propTypes = propTypes;

export default AccountPopover;
