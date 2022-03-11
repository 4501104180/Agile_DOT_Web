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