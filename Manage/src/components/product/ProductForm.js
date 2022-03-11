import { useRef } from 'react';
import { Grid, Stack, Card, Typography, TextField, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormikProvider, Form, useFormik } from 'formik';

// apis
import productApi from '../../apis/productApi';
// upload
import UploadSingleFile from '../upload/UploadSingleFile';
// editor
import QuillEditor from '../editor/quill';

const ProductForm = () => {
    const descriptionRef = useRef(null);
    const formik = useFormik({
        initialValues: {
            name: '',
            image: null,
            subtitle: ''
        },
        onSubmit: async (values, { resetForm }) => {
            const { name, image, subtitle } = values;
            var formData = new FormData();
            formData.append('name', name);
            formData.append('image', image.file);
            formData.append('subtitle', subtitle);
            const res = await productApi.insert(formData);
            console.log(res);
            resetForm();
        }
    });
    const { values, setFieldValue, getFieldProps, isSubmitting, touched, errors } = formik;
    const handleDrop = acceptedFiles => {
        const file = acceptedFiles[0];
        if (file) {
            setFieldValue('image', {
                file,
                preview: URL.createObjectURL(file)
            });
        }
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
                                    <UploadSingleFile
                                        accept='image/*'
                                        file={values.image}
                                        onDrop={handleDrop}
                                        caption={
                                            <Typography
                                                variant='caption'
                                                sx={{
                                                    my: 2,
                                                    mx: 'auto',
                                                    display: 'block',
                                                    textAlign: 'center',
                                                    color: 'text.secondary'
                                                }}
                                            >
                                                Allowed *.jpeg, *.jpg, *.png, *.gif
                                                <br />Maximum 3.1MB
                                            </Typography>
                                        }
                                    />
                                    <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                                        {Boolean(touched.image && errors.image) && errors.image}
                                    </FormHelperText>
                                </div>
                                <Typography variant='caption'>
                                    Created at: 2021-11-22T08:34:48.760+00:00
                                    <br />
                                    Updated at: 2021-11-22T08:34:48.760+00:00
                                </Typography>
                            </Card>
                        </Grid>
                    <Grid item xs={12} md={8}>
                        <Card sx={{ p: 3 }}>
                            <Stack spacing={3}>
                            <TextField
                                    fullWidth
                                    label='Name'
                                    {...getFieldProps('name')}
                                    error={Boolean(touched.name && errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                                <TextField
                                    fullWidth
                                    label='infomation'
                                    {...getFieldProps('information')}
                                    error={Boolean(touched.information && errors.information)}
                                    helperText={touched.information && errors.information}
                                />
                                <TextField
                                    fullWidth
                                    label='Price'
                                    {...getFieldProps('price')}
                                    error={Boolean(touched.price && errors.price)}
                                    helperText={touched.price && errors.price}
                                />
                                <TextField
                                    fullWidth
                                    label='Discount'
                                    {...getFieldProps('discount')}
                                    error={Boolean(touched.discount && errors.discount)}
                                    helperText={touched.discount && errors.discount}
                                />
                                <TextField
                                    fullWidth
                                    label='Quantity'
                                    {...getFieldProps('quantity')}
                                    error={Boolean(touched.quantity && errors.quantity)}
                                    helperText={touched.quantity && errors.quantity}
                                />
                                <TextField
                                    fullWidth
                                    label='VATFee'
                                    {...getFieldProps('VATFee')}
                                    error={Boolean(touched.VATFee && errors.VATFee)}
                                    helperText={touched.VATFee && errors.VATFee}
                                />
                                <TextField
                                    fullWidth
                                    label='Limit'
                                    {...getFieldProps('limit')}
                                    error={Boolean(touched.limit && errors.limit)}
                                    helperText={touched.limit && errors.limit}
                                />
                                 <div>
                                    <Typography variant='subtitle2'>Description</Typography>
                                    <QuillEditor
                                        id='project-description'
                                        onChange={handleChange}
                                    />
                                </div>
                                <Stack alignItems='end'>
                                    <LoadingButton type='submit' variant='contained' loading={isSubmitting}>
                                        Save
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

export default ProductForm;
