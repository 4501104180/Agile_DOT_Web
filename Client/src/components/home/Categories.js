import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

import Title from '../Title';

const categories = [
    {
        _id: '1',
        title: 'Balo',
        image: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        banners: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        slug: 'balo',
    },
    {
        _id: '2',
        title: 'Balo',
        image: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        banners: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        slug: 'balo',
    },
    {
        _id: '3',
        title: 'Balo',
        image: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        banners: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        slug: 'balo',
    },
    {
        _id: '4',
        title: 'Balo',
        image: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        banners: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        slug: 'balo',
    },
    {
        _id: '5',
        title: 'Balo',
        image: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        banners: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        slug: 'balo',
    },
    {
        _id: '6',
        title: 'Balo',
        image: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        banners: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        slug: 'balo',
    },
    {
        _id: '7',
        title: 'Balo',
        image: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        banners: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        slug: 'balo',
    },
    {
        _id: '8',
        title: 'Balo',
        image: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        banners: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        slug: 'balo',
    },
    {
        _id: '9',
        title: 'Balo',
        image: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        banners: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        slug: 'balo',
    },
    {
        _id: '10',
        title: 'Balo',
        image: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        banners: [
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973',
            'http://bizweb.dktcdn.net/thumb/grande/100/168/179/products/8704987.png?v=1633320475973'
        ],
        slug: 'balo',
    }
];

const Categories = ({ id }) => {
    
    return (
        <Box id={id}>
            <Title>Categories</Title>
                <RootStyle
                    container
                    justifyContent="center"
                >
                    {categories && categories.map(category => (
                        <Grid item lg={2} sm={3} xs={6} key={category._id}>
                            <Link to={`/${category.slug}/cid${category._id}`}>
                                <Category>
                                <Image src={category.image} data-src={category.image} alt={category.title} key={category._id} className='lazyload' />
                                    <Name title={category.title}>{category.title}</Name>
                                </Category>
                            </Link>
                        </Grid>
                    ))}
                </RootStyle>
        </Box>
    );
}

const RootStyle = styled(Grid)(({ theme }) => ({
    padding: '0 50px',
    marginBottom: '35px',
    maxHeight: '180px',
    overflowY: 'hidden',
    transition: 'all 0.5s',
    [theme.breakpoints.down('sm')]: {
        padding: 0
    }
}));

const Category = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
    margin: '2px',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid rgba(0,0,0,0.10)',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
        boxShadow: '5px 3px 7px rgb(145 158 171 / 24%)',
    }
}));

const Image = styled('img')({
    width: '50px',
    height: '50px',
    borderRadius: '35%',
    marginRight: '15px',
});

const Name = styled('span')({
    width: '100%',
    fontSize: '14px',
    fontWeight: '400',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '&:hover': {
        color: '#f53d2d'
    }
});

export default Categories;
