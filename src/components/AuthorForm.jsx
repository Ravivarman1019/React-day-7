// src/components/AuthorForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required')
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div>
          <label>Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label>Birth Date</label>
          <Field name="birthDate" type="date" />
          <ErrorMessage name="birthDate" component="div" />
        </div>
        <div>
          <label>Biography</label>
          <Field name="biography" type="text" />
          <ErrorMessage name="biography" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
