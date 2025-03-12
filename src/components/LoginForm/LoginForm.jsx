import { Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then(() => toast.success('You`ve been successfully logged in!'))
      .catch(() => toast.error('Invalid Data!'));

    options.resetForm();
  };

  return (
    <>
      <Link to={'/'} className={s.home}>
        Back to Home Page
      </Link>

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

      <p className={s.redirect}>
        Still have no account?{' '}
        <Link to={'/register'} className={s.redirectlink}>
          Register here!
        </Link>
      </p>
    </>
  );
}
