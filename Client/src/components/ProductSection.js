import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Stack, Skeleton } from '@mui/material';

import Title from './Title';
import Slick from './slick/Slick';
import { settingProductSection } from './slick/SlickSettings';
import ProductCard from './ProductCard';

const products = [
    {
        _id: '1',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'Section_Latop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
        slug: 'laptop-hp-probook-450-g8-i3-1115g4-4gb-256gb-15-6-win10-2h0u4pa-bac-hang-chinh-hang',
        price: 100000,
        discount: 0,
        quantity: 100,
        amount: 10,
        viewed: 325,
        searched: 225,
        sold: 451
    },
    {
        _id: '2',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'Section_Latop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
        slug: 'laptop-hp-probook-450-g8-i3-1115g4-4gb-256gb-15-6-win10-2h0u4pa-bac-hang-chinh-hang',
        price: 100000,
        discount: 0,
        quantity: 100,
        amount: 10,
        viewed: 325,
        searched: 225,
        sold: 451
    },
    {
        _id: '3',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'Section_Latop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
        slug: 'laptop-hp-probook-450-g8-i3-1115g4-4gb-256gb-15-6-win10-2h0u4pa-bac-hang-chinh-hang',
        price: 100000,
        discount: 0,
        quantity: 100,
        amount: 10,
        viewed: 325,
        searched: 225,
        sold: 451
    },
    {
        _id: '4',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'Section_Latop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
        slug: 'laptop-hp-probook-450-g8-i3-1115g4-4gb-256gb-15-6-win10-2h0u4pa-bac-hang-chinh-hang',
        price: 100000,
        discount: 0,
        quantity: 100,
        amount: 10,
        viewed: 325,
        searched: 225,
        sold: 451
    },
    {
        _id: '5',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'Section_Latop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
        slug: 'laptop-hp-probook-450-g8-i3-1115g4-4gb-256gb-15-6-win10-2h0u4pa-bac-hang-chinh-hang',
        price: 100000,
        discount: 0,
        quantity: 100,
        amount: 10,
        viewed: 325,
        searched: 225,
        sold: 451
    },
    {
        _id: '6',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'Section_Latop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
        slug: 'laptop-hp-probook-450-g8-i3-1115g4-4gb-256gb-15-6-win10-2h0u4pa-bac-hang-chinh-hang',
        price: 100000,
        discount: 0,
        quantity: 100,
        amount: 10,
        viewed: 325,
        searched: 225,
        sold: 451
    },
    {
        _id: '7',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'Section_Latop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
        slug: 'laptop-hp-probook-450-g8-i3-1115g4-4gb-256gb-15-6-win10-2h0u4pa-bac-hang-chinh-hang',
        price: 100000,
        discount: 0,
        quantity: 100,
        amount: 10,
        viewed: 325,
        searched: 225,
        sold: 451
    },
    {
        _id: '8',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'Section_Latop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
        slug: 'laptop-hp-probook-450-g8-i3-1115g4-4gb-256gb-15-6-win10-2h0u4pa-bac-hang-chinh-hang',
        price: 100000,
        discount: 0,
        quantity: 100,
        amount: 10,
        viewed: 325,
        searched: 225,
        sold: 451
    },
    {
        _id: '9',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'Section_Latop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
        slug: 'laptop-hp-probook-450-g8-i3-1115g4-4gb-256gb-15-6-win10-2h0u4pa-bac-hang-chinh-hang',
        price: 100000,
        discount: 0,
        quantity: 100,
        amount: 10,
        viewed: 325,
        searched: 225,
        sold: 451
    },
    {
        _id: '10',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'Section_Latop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
        slug: 'laptop-hp-probook-450-g8-i3-1115g4-4gb-256gb-15-6-win10-2h0u4pa-bac-hang-chinh-hang',
        price: 100000,
        discount: 0,
        quantity: 100,
        amount: 10,
        viewed: 325,
        searched: 225,
        sold: 451
    },
    
];

const SkeletonLoad = [...Array(5)].map((_, index) => (
    <Stack key={index} sx={{ p: 2 }} >
        <Skeleton variant='rectangular' width={180} height={180} />
        <Skeleton variant='text' height={45} />
        <Skeleton variant='text' width={150} />
        <Skeleton variant='text' width={130} />
    </Stack>
));

const ProductSection = ({ id, _id, type, title, sx }) => {

    return (
        <RootStyle id={id} sx={{ ...sx }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Title>{title}</Title>
                <Link to='/auth' underline="hover">
                    <Title sx={{ color: '#f53d2d' }}>View more</Title>
                </Link>
            </Box>
            <Slick settings={settingProductSection}>
                {products && products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
                {!products && SkeletonLoad}
            </Slick>
        </RootStyle >
    );
};

const RootStyle = styled('div')({
    margin: '30px 0'
});

export default ProductSection;
