import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { HashRouter, Route, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default class Transfer extends React.Component {
  render() {
    return (
      <Row flexGrow={1} horizontal="center">
        <TransferForm />
      </Row>
    )
  }
}



class TransferForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Transfer to a sibling</h1>
        <Formik
          initialValues={{ amount: '', user: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="number" name="amount" />
              <ErrorMessage name="email" component="div" />
              <Field as="select" name="user" >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Transfer
          </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}