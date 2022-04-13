import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Container, Breadcrumbs, Typography, Stack } from '@mui/material';
import { ImportContacts } from '@mui/icons-material';

import Page from '../../components/Page';
import { PATH_PAGE } from '../../routes/path';
import Teleport from '../../components/Teleport';
import { combineLink } from '../../components/ScrollToTop';
import { HEADER_HEIGHT } from '../../constant';
import {
    ImageZoom,
    Information,
    MoreInformation,
    Description
} from '../../components/product';

const products = [
    {
        _id: '1',
        images: [
            'https://salt.tikicdn.com/cache/400x400/ts/product/6b/f1/44/51f7a16a156e4f0a0c30ff6acdd45c18.jpg.webp',
            'https://salt.tikicdn.com/cache/400x400/ts/product/9e/44/ea/2b7ba151d4de1904beca5a66d383dad4.jpg.webp',
            'https://salt.tikicdn.com/cache/400x400/ts/product/e8/7d/21/8527dbc779f065684825fa44ae9d48e4.jpg.webp',
            'https://salt.tikicdn.com/cache/400x400/ts/product/ea/f0/31/53c13846f5ecb0fdccc671c40e893076.jpg.webp',
            
        ],
        name: 'Điện thoại iPhone 13 Pro Max 128GB - Hàng chính hãng',
        slug: 'laptop-hp',
        price: 33990000,
        discount: 10,
        quantity: 100,
        warranty: [
            '12','13','14',
        ],
        amount: 10,
        viewed: 325,
        searched: 225,
        sold: 451,
    },
];

const actions = [
    { icon: combineLink('information', <ImportContacts />), name: 'Product information' }
];

const Detail = () => {
    return (
        <Page title={`Product | CV Shop`}>
            <Container>
                <Teleport actions={actions} />
                {products && products.map(product => (
                    <Fragment>
                        <StyledBreadcrumbs separator='›'>
                            <Link to={PATH_PAGE.home} style={{ fontSize: '15px' }}>
                                Trang chủ
                            </Link>
                            {product.tags && product.tags.map(tag => (
                                <Link key={tag._id} to={`/${tag.slug}/cid${tag._id}`} style={{ fontSize: '15px' }}>
                                    {tag.title}
                                </Link>
                            ))}
                            <Typography fontSize='15px' color='text.primary'>
                                {product.name}
                            </Typography>
                        </StyledBreadcrumbs>
                        <Wrapper id='information' sx={{ p: 0, mt: 0 }}>
                            <Stack direction={{ xs: 'column', sm: 'row', lg: 'row' }} justifyContent='space-between'>
                                <ImageZoom images={product.images} />
                                <Information product={product} />
                            </Stack>
                        </Wrapper>
                        <Wrapper id='more-information'>
                            <MoreInformation information={product.information} />
                        </Wrapper>
                        <Wrapper id='descriptions'>
                            <Description description={product.description} />
                        </Wrapper>
                    </Fragment>
                ))}
            </Container>
        </Page>
    );
};

const Wrapper = styled('div')(({ theme }) => ({
    margin: '20px 0',
    padding: '15px',
    backgroundColor: theme.palette.background.paper
}));

const StyledBreadcrumbs = styled(Breadcrumbs)({
    paddingBottom: '10px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '& ol, & li, p': {
        display: 'inline'
    }
});

const DiscoverMore = styled('div')(({ theme }) => ({
    padding: '15px',
    fontWeight: 'bold',
    backgroundColor: theme.palette.background.paper,
    position: 'sticky',
    top: `calc(${HEADER_HEIGHT} + 10px)`,
    zIndex: 99,
    '&:before, &:after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '10px',
        backgroundColor: theme.palette.background.default,
        left: 0
    },
    '&:before': {
        top: '-10px'
    },
    '&:after': {
        bottom: '-10px'
    }
}));

export default Detail;
