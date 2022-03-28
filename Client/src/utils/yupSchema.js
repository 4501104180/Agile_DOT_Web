import * as yup from 'yup';
import accountApi from '../apis/accountApi';

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required('This field is required!'),
    email: yup
        .string()
        .email('This field required an email!')
        .test('checkExist', 'This email is already exist!', async value => {
            try {
                const account = await accountApi.checkExist(value);
                return !account.exist;
            } catch (error) {
                console.log(error)
            }
        })
        .required('This field is required!'),
    password: yup
        .string()
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/,
            'Minimum three characters. At least one letter, one number and one special character')
        .required('This field is required!'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password must match')
        .required('This field is required!')
});

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('This field required an email!')
        .required('This field is required!'),
    password: yup
        .string()
        .required('This field is required!')
});