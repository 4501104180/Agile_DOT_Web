import { Grid, Stack, Card, Typography, TextField, FormHelperText} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormikProvider, Form, useFormik } from 'formik';
import { useSelector } from 'react-redux'
// apis
import accountApi from '../apis/accountApi';
// upload
import UploadSingleFile from '../components/upload/UploadSingleFile';
import { useReducer } from 'react';
// path

const AccountForm = () => {
    const { user } = useSelector(state => state.user);
    console.log(user);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            password: user.password,
            name: user.name,
            image: user.image,
            phone: user.phone,
            address: user.address,
        },
        onSubmit: async (values, {resetForm}) => {
            const {password, name, image, phone, address} = values;
            var formData = new FormData();
            formData.append('password', password);
            formData.append('name', name);
            formData.append('image', image.file);
            formData.append('phone', phone);
            formData.append('address', address);
            let res = null;
            res = await accountApi.edit(user._id, formData);
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
                                    sx={{
                                        width: 184,
                                        height: 184,
                                        borderRadius: '50%',
                                        '& > div': {
                                            borderRadius: '50%'
                                        }
                                    }}
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
                                    type='password'
                                    label='Password'
                                    {...getFieldProps('password')}
                                    error={Boolean(touched.password && errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                                <TextField
                                    fullWidth
                                    label='Name'
                                    {...getFieldProps('name')}
                                    error={Boolean(touched.name && errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                                <TextField
                                    fullWidth
                                    label='Phone'
                                    {...getFieldProps('phone')}
                                    error={Boolean(touched.phone && errors.phone)}
                                    helperText={touched.phone && errors.phone}
                                />
                                <TextField
                                    fullWidth
                                    label='Address'
                                    {...getFieldProps('address')}
                                    error={Boolean(touched.address && errors.address)}
                                    helperText={touched.address && errors.address}
                                />
                                <Stack alignItems='end'>
                                    <LoadingButton type='submit' variant='contained' loading={isSubmitting}>
                                        {'Change'}
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
export default AccountForm;
