import PropTypes from 'prop-types';
import { Grid, Stack, Card, Typography, TextField, FormHelperText, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormikProvider, Form, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useConfirm } from 'material-ui-confirm';
import { useDispatch } from 'react-redux';

// hooks
import useSnackbar from '../../hooks/useSnackbar';
// slices
import { insertSuccess, editSuccess, restoreSuccess } from '../../redux/slices/category';
// upload
import {UploadSingleFile, UploadMultipleFile} from '../upload';
// utils
import { createCategorySchema } from '../../utils/yupSchemas';
import { fDate } from '../../utils/formatDate';
//api
import categoryApi from '../../apis/categoryApi';
// path
import { PATH_DASHBOARD } from '../../routes/path';

const propTypes = {
    isEdit: PropTypes.bool,
    category: PropTypes.object
};
const CategoryForm = ({isEdit, category}) => {
    const confirm = useConfirm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { setSnackbar } = useSnackbar();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: category?.title||'',
            image: category?.image||'',
            displayOrder: category?.displayOrder||1,
            banners: category?.banners||[]
        },
        validationSchema: createCategorySchema,
        onSubmit: async (values, { resetForm }) => {
            const { title, image, banners, displayOrder } = values;
            var formData = new FormData();
            formData.append('title', title);
            formData.append('displayOrder', displayOrder);
            formData.append('image', image.file);
            banners.forEach(banner => {
                if (typeof banner === 'string') {
                    formData.append('bannersString', banner);
                } else {
                    formData.append('banners', banner);
                }
            });
            if (isEdit) {
                try{
                    const res = await categoryApi.editCategoryById(category._id, formData);
                    if(res.status==='info'){
                        await confirm({
                            title: res.message,
                            content: <Alert severity={res.status}>Rename or restore deleted category?</Alert>
                        });
                        const restore = await categoryApi.restoreByID(res.category._id);
                        res.message = restore.message;
                        dispatch(restoreSuccess(res.category));
                    }
                    if(res.status === 'success'){
                        dispatch(editSuccess(res.category));
                    }
                    setSnackbar({
                        isOpen: true,
                        type: res.status,
                        message: res.message,
                        anchor: 'bottom-center'
                    });
                    navigate(PATH_DASHBOARD.category.list);
                }
                catch(error){
                    console.log(error);
                }
            } else {
                try{
                    const res = await categoryApi.insert(formData);
                    if (res.status === 'info') {
                        await confirm({
                            title: res.message,
                            content: <Alert severity={res.status}>Do you want to restore?</Alert>
                        });
                        const restore = await categoryApi.restoreByID(res.category._id);
                        res.message = restore.message;
                        dispatch(restoreSuccess(res.category));
                    }
                    if (res.status === 'success') {
                        dispatch(insertSuccess(res.category));
                    }
                    setSnackbar({
                        isOpen: true,
                        type: res.status,
                        message: res.message,
                        anchor: 'bottom-center'
                    });
                    resetForm();
                }
                catch (error){
                    console.log(error);
                }
            }
        }
    });
    const { values, setFieldValue, getFieldProps, isSubmitting, touched, errors } = formik;
    const handleDropSingle = acceptedFiles => {
        const file = acceptedFiles[0];
        if (file) {
            setFieldValue('image', {
                file,
                preview: URL.createObjectURL(file)
            });
        }
    };
    const handleDropMultiple = acceptedFiles => {
        const files = acceptedFiles.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
        );
        setFieldValue('banners', files);
    };
    const handleRemoveAll = () => {
        setFieldValue('banners', []);
    };
    const handleRemove = file => {
        const filteredFiles = values.banners.filter(_file => _file !== file);
        setFieldValue('banners', filteredFiles);
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
                                    maxSize={1048576}
                                    error={Boolean(touched.image && errors.image)}
                                    onDrop={handleDropSingle}
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
                                <UploadMultipleFile
                                    accept='image/*'
                                    files={values.banners}
                                    maxSize={3145728}
                                    showPreview
                                    onDrop={handleDropMultiple}
                                    onRemove={handleRemove}
                                    onRemoveAll={handleRemoveAll}
                                />
                                <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                                    {Boolean(touched.banners && errors.banners) && errors.banners}
                                </FormHelperText>
                            </div>
                            {isEdit && category && <Typography variant='caption'>Last updated: <br /> {fDate(category.updatedAt)}</Typography>}
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
                                    label='Display Order'
                                    type='number'
                                    {...getFieldProps('displayOrder')}
                                    error={Boolean(touched.displayOrder && errors.displayOrder)}
                                    helperText={touched.displayOrder && errors.displayOrder}
                                />
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
CategoryForm.propTypes = propTypes;
export default CategoryForm;
