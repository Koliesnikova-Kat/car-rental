import { Field, Form, Formik } from 'formik';
import s from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function RegistrationForm() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success('You`ve been successfully registered!');
      })
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
            <span>Name:</span>
            <Field name='name' />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field name='email' />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field name='password' type='password' />
          </label>
          <button type='submit' className={s.button}>
            Register
          </button>
        </Form>
      </Formik>

      <p className={s.redirect}>
        Already have an account?{' '}
        <Link to={'/login'} className={s.redirectlink}>
          Log In!
        </Link>
      </p>
    </>
  );
}
