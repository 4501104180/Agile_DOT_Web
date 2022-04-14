import { useState, useEffect, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Container, Breadcrumbs, Typography, Stack, Skeleton, LinearProgress } from '@mui/material';
import { ImportContacts, Article } from '@mui/icons-material';


import Page from '../../components/Page';
import { PATH_PAGE } from '../../routes/path';
import Teleport from '../../components/Teleport';
import { combineLink } from '../../components/ScrollToTop';
import {
    ImageZoom,
    Information,
    MoreInformation,
    Description
} from '../../components/product';
import productApi from '../../apis/productApi';

const actions = [
    { icon: combineLink('information', <ImportContacts />), name: 'Product information' },
    { icon: combineLink('more-information', <Article />), name: 'More information' },
];

const Detail = () => {
    const [product, setProduct] = useState(null);
    const { slugProduct } = useParams();
    useEffect(() => {
        const getProduct = async () => {
            try {
                const product = await productApi.getProduct(slugProduct);
                setProduct(product);
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, [slugProduct]);
    return (
        <Page title={`${product ? product.name : ''} | CV Shop`}>
            <Container>
                <Teleport actions={actions} />
                {product && (
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
                )}

                {!product && (
                    <Fragment>
                        <Wrapper>
                            <Stack
                                direction={{ xs: 'column', sm: 'row', lg: 'row' }}
                                justifyContent='space-between'
                            >
                                <Stack spacing={1}>
                                    <Skeleton variant="rectangular" width={410} height={360} />
                                    <Stack direction='row' spacing={1}>
                                        {[...Array(5)].map((_, index) => (
                                            <Skeleton key={index} variant="rectangular" width={75} height={65} />
                                        ))}
                                    </Stack>
                                </Stack>
                                <Stack spacing={1} sx={{ width: 'calc(100% - 450px)' }}>
                                    <Skeleton variant='text' height={50} />
                                    <Skeleton variant='text' width={400} />
                                    <Skeleton variant='rectangular' width={500} height={100} />
                                    <Skeleton variant='text' width={400} />
                                    <Skeleton variant='text' width={400} />
                                    <Skeleton variant='text' width={400} />
                                    <Skeleton variant='text' width={400} />
                                    <Skeleton variant='text' width={400} />
                                    <Stack direction='row' spacing={2}>
                                        <Skeleton variant='rectangular' width={150} height={50} />
                                        <Skeleton variant='rectangular' width={150} height={50} />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Wrapper>
                        <Wrapper sx={{ display: 'flex' }}>
                            {[...Array(5)].map((_, index) => (
                                <Stack key={index} sx={{ p: 2 }} >
                                    <Skeleton variant='rectangular' width={180} height={180} />
                                    <Skeleton variant='text' height={45} />
                                    <Skeleton variant='text' width={150} />
                                    <Skeleton variant='text' width={130} />
                                </Stack>
                            ))}
                        </Wrapper>
                        <LinearProgress />
                    </Fragment>
                )}
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

export default Detail;
