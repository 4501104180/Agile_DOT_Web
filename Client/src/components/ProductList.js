import { styled } from '@mui/material/styles';
import { Stack, Typography, Skeleton } from '@mui/material';

import Title from './Title';
import ProductCard from './ProductCard';

const products = [
    {
        _id: '1',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'List_Laptop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
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
        name: 'List_Laptop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
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
        name: 'List_Laptop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
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
        name: 'List_Laptop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
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
        name: 'List_Laptop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
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
        name: 'List_Laptop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
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
        name: 'List_Laptop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
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
        name: 'List_Laptop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
        slug: 'laptop-hp-probook-450-g8-i3-1115g4-4gb-256gb-15-6-win10-2h0u4pa-bac-hang-chinh-hang',
        price: 100000,
        discount: 0,
        quantity: 100,
        amount: 10,
        viewed: 325,
        searched: 225,
        sold: 451,
    },
    {
        _id: '9',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'List_Laptop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
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
        name: 'List_Laptop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
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

const SkeletonLoad = [...Array(10)].map((_, index) => (
    <Stack key={index} sx={{ p: 2 }} >
        <Skeleton variant='rectangular' width={180} height={180} />
        <Skeleton variant='text' height={45} />
        <Skeleton variant='text' width={150} />
        <Skeleton variant='text' width={130} />
    </Stack>
));

const ProductList = ({ id }) => {
    return (
        <Stack id={id}>
            <Title>Suggestions for you</Title>
            <Wrapper>
                {products.length !== 0 && (
                    <>
                        {products.map(product => (
                            <ProductCard key={product._id} product={product} />
                        ))}

                        <LoadMore>
                            <LoadButton>
                                <Typography variant="subtitle2">
                                    Load more
                                </Typography>
                            </LoadButton>
                        </LoadMore>
                    </>
                )}
                {products.length === 0 && SkeletonLoad}
            </Wrapper>
        </Stack>
    );
};

const Wrapper = styled('div')({
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '50px'
});

const LoadMore = styled('div')({
    position: 'absolute',
    bottom: '-70px',
    left: '30%',
    width: '40%',
    height: '50px',
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const LoadButton = styled('div')(({ theme }) => ({
    width: '100%',
    padding: '15px',
    borderRadius: '15px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '5px 3px 7px rgb(145 158 171 / 24%)',
    transition: '0.5s',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
        color: '#fff',
        backgroundColor: '#f76254'
    }
}));

export default ProductList;
