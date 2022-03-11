import { useRef } from 'react';
import { Grid, Stack, Card, Typography, TextField, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormikProvider, Form, useFormik } from 'formik';
// import { useDispatch } from 'react-redux';

// slices
// import { insertProject } from '../../redux/slices/project';
// upload
import UploadSingleFile from '../upload/UploadSingleFile';
// editor
// import QuillEditor from '../editor/quill';
// utils
import { createCategorySchema } from '../../utils/yupSchemas';

const CategoryForm = () => {
    // const dispatch = useDispatch();
    const descriptionRef = useRef(null);
    const formik = useFormik({
        initialValues: {
            title: '',
            image: 'null',
            parentId: '',
            displayOrder: '',
            banners: 'null',
            status: '',
            slug: ''
        },
        validationSchema: createCategorySchema,
        onSubmit: (values, { resetForm }) => {
            // const {description} = values;
            // formData.append('description', description);
            // dispatch(insertCategory(formData));

            // const { title, image, banners } = values;
            // var formData = new FormData();
            // formData.append('title', title);
            // formData.append('image', image.file);
            // formData.append('banners', banners.file);
            // dispatch(insertCategory(formData));
            console.log(values);
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
    const _handleDrop = acceptedFiles => {
        const file = acceptedFiles[0];
        if (file) {
            setFieldValue('banners', {
                file,
                preview: URL.createObjectURL(file)
            });
        }
    };
    return (
        <FormikProvider value={formik}>
            <Form>
                <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ py: 10, px: 3 }}>
                            <div>
                                Image:
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
                            <div>
                                Banners:
                                <UploadSingleFile
                                    accept='image/*'
                                    file={values.banners}
                                    onDrop={_handleDrop}
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
                                    {Boolean(touched.banners && errors.banners) && errors.banners}
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
                                    label='Title'
                                    {...getFieldProps('title')}
                                    error={Boolean(touched.title && errors.title)}
                                    helperText={touched.title && errors.title}
                                />
                                <TextField
                                    fullWidth
                                    label='Parent ID'
                                    {...getFieldProps('parentId')}
                                    error={Boolean(touched.parentId && errors.parentId)}
                                    helperText={touched.parentId && errors.parentId}
                                />
                                <TextField
                                    fullWidth
                                    label='Display Order'
                                    {...getFieldProps('displayOrder')}
                                    error={Boolean(touched.displayOrder && errors.displayOrder)}
                                    helperText={touched.displayOrder && errors.displayOrder}
                                />
                                {/* For architect select */}
                                
                                {/* For architect select */}
                                <Stack alignItems='end'>
                                    <LoadingButton type='submit' variant='contained' loading={isSubmitting}>
                                        SAVE
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

export default CategoryForm;
