import { Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then(() => navigate('/contacts', {replace: true}))
      .catch(() => toast.error('Invalid Data!'));
    
    options.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Email:</span>
            <Field name='email' />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field name='password' type='password' />
          </label>
          <button type='submit' className={s.button}>
            Log In
          </button>
        </Form>
      </Formik>
    </>
  );
}
