import * as Yup from 'yup';
import { LoginForm } from './Login.types';

export function initialLoginForm(): LoginForm {
  return {
    username: '',
    password: ''
  };
};
 
export const validationSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Username required'),
  password: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Password required')
});
