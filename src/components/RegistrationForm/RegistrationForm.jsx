import { Field, Form, Formik } from 'formik';
import s from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function RegistrationForm() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(register(values));

    options.resetForm();
  };

  return (
    <>
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
    </>
  );
}
