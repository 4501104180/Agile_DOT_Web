import * as yup from 'yup';

export const createCategorySchema = yup.object().shape({
    title: yup
        .string()
        .required('This field is required!'),
    displayOrder: yup
        .string()
        .required('This field is required!')
        .max(100, 'Up to 100 characters'),
    image: yup
        .mixed()
        .required('This field is required!'),
    banners: yup
        .array()
        .min(1, 'This field is required!'),
});

export const createProductSchema = yup.object().shape({
    name: yup
        .string()
        .required('This field is required!'),
    images: yup
        .array()
        .min(1, 'This field is required!'),
    price: yup
        .number()
        .min(0, 'Price can not be negative!')
        .required('This field is required!'),
    discount: yup
        .number()
        .min(0, 'Minimum is 0 percent!')
        .max(100, 'Maximum is 100 percent'),
    quantity: yup
        .number()
        .min(1, 'At least 1 product left!')
        .required('This field is required!'),
    limit: yup
        .number()
        .min(0, 'Minimum is 0!')
});
