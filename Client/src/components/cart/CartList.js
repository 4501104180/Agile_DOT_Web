import { styled } from '@mui/material/styles';
import { Stack, Checkbox, Typography, IconButton } from '@mui/material';
import { DeleteForeverOutlined, Favorite, Check } from '@mui/icons-material';

import { CART_WIDTH } from '../../constant';
import { HEADER_HEIGHT } from '../../constant';
import CartItem from './CartItem';
import Image from '../Image';

const cart = [
    {
        _id: '001',
        images: [
            'https://salt.tikicdn.com/cache/200x200/ts/product/ab/92/c0/59a0fbd34daaf381a184e3173234e726.jpg.webp'
        ],
        name: 'Laptop HP Probook 450 G8 i3 1115G4/4GB/256GB/15.6/Win10/(2H0U4PA)/Bạc - Hàng chính hãng',
        slug: 'laptop-hp-probook-450-g8-i3-1115g4-4gb-256gb-15-6-win10-2h0u4pa-bac-hang-chinh-hang',
        price: 100000,
        discount: 0,
        quantity: 100,
        amount: 10,
        checked: false,
        limit: 0
    }
];

const CartList = () => {
    return (
        <RootStyle>
            <Heading>
                <Stack>
                    <Stack direction='row' alignItems='center' sx={{ pr: '5px' }}>
                        <Stack className="cart-col-1" direction='row' alignItems='center'>
                            <Checkbox
                                size='small'
                                checked={false}
                                checkedIcon={<Favorite />}
                                onChange={() => { }}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}
                            />
                            <Typography variant='subtitle2'>All (10 products)</Typography>
                        </Stack>
                        <Typography className='cart-col-2' variant='subtitle2'>Single</Typography>
                        <Typography className='cart-col-3' variant='subtitle2'>Quantity</Typography>
                        <Typography className='cart-col-4' variant='subtitle2'>Price</Typography>
                        <IconButton className='cart-col-5' color='error' onClick={() => { }}>
                            <DeleteForeverOutlined />
                        </IconButton>
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <ProgessBar achieved={100}>
                            <Marked position='first'>
                                <Text location='bottom'>Buy</Text>
                            </Marked>
                            <Marked position='end' achieved='true'>
                                <Check color='success' sx={{ fontSize: '14px' }} />
                                <Text location='top'>-30K</Text>
                                <Text location='bottom'>50M</Text>
                            </Marked>
                            <Marked position='end' achieved='true'>
                                <Check color='success' sx={{ fontSize: '14px' }} />
                                <Text location='top'>-50K</Text>
                                <Text location='bottom'>100M</Text>
                            </Marked>
                        </ProgessBar>
                        <Image
                            alt=''
                            src='https://salt.tikicdn.com/ts/upload/77/9a/0d/601353ce6c8255e009706cdae74d01de.png'
                            sx={{ width: '76px', height: '24px' }}
                        />
                    </Stack>
                </Stack>
            </Heading>
            <Content>
                {cart && cart.map(item => (
                    <CartItem
                        key={item._id}
                        item={item}
                    />
                ))}
            </Content>
        </RootStyle>
    );
};

const RootStyle = styled('div')({
    width: CART_WIDTH
});

const Heading = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '4px',
    position: 'sticky',
    top: `calc(${HEADER_HEIGHT} + 10px)`,
    padding: '5px 0',
    margin: '10px 0',
    zIndex: 99,
    '&:before, &:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '10px',
        backgroundColor: theme.palette.background.default,
    },
    '&:before': {
        top: '-10px'
    },
    '&:after': {
        bottom: '-10px'
    }
}));

const Content = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    paddingRight: '5px'
}));

const ProgessBar = styled('div')(({ theme, achieved }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: `calc(${CART_WIDTH} - 150px)`,
    margin: '17px 20px',
    '&:before': {
        content: '""',
        position: 'absolute',
        backgroundColor: theme.palette.background.default,
        borderRadius: '100px',
        width: `calc(${CART_WIDTH} - 150px)`,
        height: '6px',
        transform: 'translateY(-50%)',
        top: '50%',
        zIndex: 0
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        background: 'linear-gradient(90deg,rgb(0, 173, 87) 0%, rgb(119, 218, 144) 105.65%)',
        borderRadius: '100px',
        width: `${achieved}%`,
        height: '6px',
        transform: 'translateY(-50%)',
        top: '50%',
        zIndex: 1,
        transition: 'width 0.5s ease-in 0s'
    }
}));

const Marked = styled('div')(({ theme, position, achieved }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2,
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: `${position === 'first' ? 'rgba(0,0,0,0)' : achieved === 'true' ? 'rgb(214, 250, 223)' : theme.palette.background.paper}`,
    border: `${position !== 'first' ? '1px solid rgb(221, 221, 227)' : 'none'}`
}));

const Text = styled('div')(({ theme, location }) => ({
    position: 'absolute',
    top: `${location === 'top' ? '-16px' : '16px'}`,
    fontSize: '11px',
    color: theme.palette.text.primary,
    fontWeight: '500'
}));

export default CartList;
