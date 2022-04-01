import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('This field required an email!')
        .required('This field is required!'),
    password: yup
        .string()
        .required('This field is required!')
});
