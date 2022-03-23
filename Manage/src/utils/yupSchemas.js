import * as yup from 'yup';

export const createCategorySchema = yup.object().shape({
    name: yup
        .string()
        .required('Không được bỏ trống!'),
    subtitle: yup
        .string()
        .required('Không được bỏ trống!')
        .max(100, 'Tối đa 100 ký tự'),
    image: yup
        .mixed()
        .required('Không được bỏ trống!'),
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
