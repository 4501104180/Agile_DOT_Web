import { Link } from 'react-router-dom';
import { Container, Stack, Breadcrumbs, Typography, Alert, AlertTitle } from '@mui/material';

import Page from '../components/Page';
import { CartList, TotalPrice } from '../components/cart';

const Cart = () => {
    return (
        <Page title='Cart | DOT Shop'>
            <Container className="wide-container">
                <Breadcrumbs separator='›' sx={{ pb: '5px' }}>
                    <Link to='/' style={{ fontSize: '15px' }}>
                        Home
                    </Link>
                    <Typography fontSize='15px' color='text.primary'>
                        Cart
                    </Typography>
                </Breadcrumbs>

                {/* Events start */}
                <Alert severity="info">
                    <AlertTitle>Promotional events</AlertTitle>
                    Free shipping for orders from 50M <strong>(11/1/2021 - 12/31/2021)</strong>
                </Alert>
                {/* Events end */}

                <Typography variant='h5' sx={{ mb: 2 }}>
                    Cart
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'column', lg: 'row' }}
                    justifyContent='space-between'
                >
                    <CartList />
                    <TotalPrice />
                </Stack>
                {/* <Stack
                    alignItems='center'
                    spacing={1}
                    sx={{ p: 5, backgroundColor: theme => theme.palette.background.paper }}
                >
                    <Image
                        src='https://salt.tikicdn.com/desktop/img/mascot@2x.png'
                        alt=''
                        sx={{ width: '190px', height: '160px' }}
                    />
                    <Typography variant='title'>
                        There are no products in your cart.
                    </Typography>
                    <Link to={PATH_PAGE.home}>
                        <Button color='warning' variant='contained'>
                            BUY NOW
                        </Button>
                    </Link>
                </Stack> */}
            </Container>
        </Page>
    );
}

export default Cart;
