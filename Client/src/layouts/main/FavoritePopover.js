import { Link } from 'react-router-dom';
import { Badge, IconButton } from '@mui/material';
import { FavoriteBorderOutlined } from '@mui/icons-material';

const FavoritePopover = () => (
    <Badge
        badgeContent={100}
        max={99}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left'
        }}
        sx={{ m: 1 }}
    >
        <Link to='/favorite'>
            <IconButton color='error'>
                <FavoriteBorderOutlined />
            </IconButton>
        </Link>
    </Badge>
);

export default FavoritePopover;
