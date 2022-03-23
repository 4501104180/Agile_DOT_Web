import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Stack, Card, Typography, TextField, FormHelperText, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormikProvider, Form, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useConfirm } from 'material-ui-confirm';

// apis
import productApi from '../../apis/productApi';
// hooks
import useSnackbar from '../../hooks/useSnackbar';
// slices
import { insertSuccess, editSuccess, restoreSuccess } from '../../redux/slices/product';
// upload
import { UploadMultipleFile } from '../upload';
// editor
import QuillEditor from '../editor/quill';
// utils
import { createProductSchema } from '../../utils/yupSchemas';
import { fDate } from '../../utils/formatDate';
// path
import { PATH_DASHBOARD } from '../../routes/path';

const propTypes = {
    isEdit: PropTypes.bool,
    product: PropTypes.object
};

const ProductForm = ({ isEdit, product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const confirm = useConfirm();
    const descriptionRef = useRef(null);
    const { setSnackbar } = useSnackbar();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: product?.name || '',
            images: product?.images || [],
            price: product?.price || 0,
            discount: product?.discount || 0,
            quantity: product?.quantity || 1,
            limit: product?.limit || 0,
            VATFee: product?.VATFee || 0,
            description: product?.description || ''
        },
        validationSchema: createProductSchema,
        onSubmit: async (values, { resetForm }) => {
            const { name, images, price, discount, quantity, limit, VATFee, description } = values;
            var formData = new FormData();
            formData.append('name', name);
            images.forEach(image => {
                if (typeof image === 'string') {
                    formData.append('imagesString', image);
                } else {
                    formData.append('images', image);
                }
            });
            formData.append('price', price);
            formData.append('discount', discount);
            formData.append('quantity', quantity);
            formData.append('limit', limit);
            formData.append('VATFee', VATFee);
            formData.append('description', description);
            if (isEdit) {
                try {
                    const res = await productApi.edit(product._id, formData);
                    if (res.statusText === 'info') {
                        await confirm({
                            title: res.message,
                            content: <Alert severity={res.statusText}>Rename or restore deleted product?</Alert>
                        });
                        const restore = await productApi.restoreById(res.product._id);
                        res.message = restore.message;
                        dispatch(restoreSuccess(res.product));
                    }
                    if (res.statusText === 'success') {
                        dispatch(editSuccess(res.product));
                    }
                    setSnackbar({
                        isOpen: true,
                        type: res.statusText,
                        message: res.message,
                        anchor: 'bottom-center'
                    });
                    navigate(PATH_DASHBOARD.product.list);
                } catch (error) {
                    console.log(error);
                }
            } else {
                try {
                    const res = await productApi.insert(formData);
                    if (res.statusText === 'info') {
                        await confirm({
                            title: res.message,
                            content: <Alert severity={res.statusText}>Do you want to restore?</Alert>
                        });
                        const restore = await productApi.restoreById(res.product._id);
                        res.message = restore.message;
                        dispatch(restoreSuccess(res.product));
                    }
                    if (res.statusText === 'success') {
                        dispatch(insertSuccess(res.product));
                    }
                    setSnackbar({
                        isOpen: true,
                        type: res.statusText,
                        message: res.message,
                        anchor: 'bottom-center'
                    });
                    resetForm();
                } catch (error) {
                    console.log(error);
                }
            }
        }
    });
    const { values, setFieldValue, getFieldProps, isSubmitting, touched, errors } = formik;
    const handleDrop = acceptedFiles => {
        const files = acceptedFiles.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
        );
        setFieldValue('images', files);
    };
    const handleRemoveAll = () => {
        setFieldValue('images', []);
    };
    const handleRemove = file => {
        const filteredFiles = values.images.filter(_file => _file !== file);
        setFieldValue('images', filteredFiles);
    };
    const handleChange = value => {
        // Debounce
        if (descriptionRef.current) clearTimeout(descriptionRef.current);
        descriptionRef.current = setTimeout(() => {
            setFieldValue('description', value);
        }, 500);
    };
    return (
        <FormikProvider value={formik}>
            <Form>
                <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ py: 10, px: 3 }}>
                            <div>
                                <UploadMultipleFile
                                    accept='image/*'
                                    files={values.images}
                                    showPreview
                                    onDrop={handleDrop}
                                    onRemove={handleRemove}
                                    onRemoveAll={handleRemoveAll}
                                />
                                <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                                    {Boolean(touched.images && errors.images) && errors.images}
                                </FormHelperText>
                            </div>
                            {isEdit && product && <Typography variant='caption'>Last updated: <br /> {fDate(product.updatedAt)}</Typography>}
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Card sx={{ p: 3 }}>
                            <Stack spacing={3}>
                                <TextField
                                    fullWidth
                                    label='Product name'
                                    {...getFieldProps('name')}
                                    error={Boolean(touched.name && errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                                <Stack
                                    direction='row'
                                    spacing={1}
                                >
                                    <TextField
                                        fullWidth
                                        label='Price'
                                        type='number'
                                        {...getFieldProps('price')}
                                        error={Boolean(touched.price && errors.price)}
                                        helperText={touched.price && errors.price}
                                    />
                                    <TextField
                                        fullWidth
                                        label='Discount'
                                        type='number'
                                        {...getFieldProps('discount')}
                                        error={Boolean(touched.discount && errors.discount)}
                                        helperText={touched.discount && errors.discount}
                                    />
                                </Stack>
                                <Stack
                                    direction='row'
                                    spacing={1}
                                >
                                    <TextField
                                        fullWidth
                                        label='Quantity'
                                        type='number'
                                        {...getFieldProps('quantity')}
                                        error={Boolean(touched.quantity && errors.quantity)}
                                        helperText={touched.quantity && errors.quantity}
                                    />
                                    <TextField
                                        fullWidth
                                        label='Limit order (0 is no limit!)'
                                        type='number'
                                        {...getFieldProps('limit')}
                                        error={Boolean(touched.limit && errors.limit)}
                                        helperText={touched.limit && errors.limit}
                                    />
                                </Stack>
                                <TextField
                                    fullWidth
                                    label='VAT Fee'
                                    type='number'
                                    {...getFieldProps('VATFee')}
                                    error={Boolean(touched.VATFee && errors.VATFee)}
                                    helperText={touched.VATFee && errors.VATFee}
                                />
                                <div>
                                    <Typography variant='subtitle2'>Description</Typography>
                                    <QuillEditor
                                        id='product-description'
                                        value={values.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <Stack alignItems='end'>
                                    <LoadingButton type='submit' variant='contained' loading={isSubmitting}>
                                        {isEdit ? 'Save' : 'Create'}
                                    </LoadingButton>
                                </Stack>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </Form>
        </FormikProvider>
    );
};

ProductForm.propTypes = propTypes;

export default ProductForm;
