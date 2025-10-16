import { Formik, Form, Field } from 'formik';
import Select from 'react-select';
// import { useFormikContext } from 'formik';
import s from './CatalogFilter.module.css';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#101828' : '#8D929A',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      color: '#101828',
    },
  }),
  menu: (provided) => ({
    ...provided,
    maxHeight: 180,
    overflowY: 'auto',
    borderRadius: 12,
    border: '1px solid #F7F7F7',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    background: '#FFF',
  }),
  control: (provided) => ({
    ...provided,
    maxHeight: 44,
    borderRadius: 12,
    border: 'none',
    boxShadow: 'none',
    background: '#F7F7F7',
    padding: '12px 16px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#8D929A',
    // fontWeight: 400,
  }),
};

const validate = (values) => {
  const errors = {};
  const from = Number(values.mileageFrom);
  const to = Number(values.mileageTo);

  if (values.mileageFrom && values.mileageTo && from > to) {
    errors.mileageTo = 'Must be greater than or equal to "From"';
  }

  if (from < 0) errors.mileageFrom = 'Must be ≥ 0';

  if (to < 0) errors.mileageTo = 'Must be ≥ 0';

  return errors;
}

export default function CatalogFilter({ brands, prices, initialValues, onSearch }) {

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validate={validate}
      onSubmit={onSearch}
    >
      {({ setFieldValue, values, errors, touched, resetForm }) => (
        <Form className={s.form}>
          <div className={s.inputs}>
            {/* Brand */}
            <div className={s.filter}>
              <label className={s.label}>Car brand</label>
              <Select
                name='brand'
                options={brands}
                styles={customStyles}
                placeholder='Choose a brand'
                isClearable
                onChange={(option) =>
                  setFieldValue('brand', option ? option.value : '')
                }
                value={brands.find((opt) => opt.value === values.brand) || null}
              />
              {/* <Field as='select' name='brand' className={s.field}>
                <option value='' className={s.option}>
                  Choose a brand
                </option>
                {brands.map(({ label, value }) => (
                  <option key={value} value={value} className={s.list}>
                    {label}
                  </option>
                ))}
              </Field> */}
            </div>

            {/* Price */}
            <div className={s.filter}>
              <label className={s.label}>Price/ 1 hour</label>
              <Field as='select' name='price' className={s.field}>
                <option value='' className={s.option}>
                  Choose a price
                </option>
                {prices.map(({ label, value }) => (
                  <option key={value} value={value} className={s.option}>
                    {label}
                  </option>
                ))}
              </Field>
            </div>

            {/* Mileage */}
            <div className={s.filter}>
              <label className={s.label}>Car mileage / km</label>
              <div className={s.fields}>
                <Field
                  name='mileageFrom'
                  type='number'
                  placeholder='From'
                  min={0}
                  className={s.fieldsFrom}
                />
                <Field
                  name='mileageTo'
                  type='number'
                  placeholder='To'
                  min={0}
                  className={s.fieldsTo}
                />
              </div>
            </div>

            {touched.mileageFrom && errors.mileageFrom && (
              <div style={{ color: '#d00', fontSize: 12, marginTop: 4 }}>
                {errors.mileageFrom}
              </div>
            )}

            {touched.mileageTo && errors.mileageTo && (
              <div style={{ color: '#d00', fontSize: 12, marginTop: 4 }}>
                {errors.mileageTo}
              </div>
            )}
          </div>

          <div className={s.buttons}>
            {/* Search button */}
            <button type='submit' className={s.button}>
              Search
            </button>

            {/* Reset button */}
            <button
              type='button'
              className={s.button}
              onClick={(e) => {
                e.preventDefault();
                resetForm({
                  values: {
                    brand: '',
                    price: '',
                    mileageFrom: '',
                    mileageTo: '',
                  },
                });
                onSearch({
                  brand: '',
                  price: '',
                  mileageFrom: '',
                  mileageTo: '',
                });
              }}
            >
              Reset
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
