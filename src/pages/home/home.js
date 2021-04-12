import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { loginStyleCss, Button, LoginTitle } from './homeStyleCss';
import 'react-toastify/dist/ReactToastify.css';

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const Home = () => {
  let history = useHistory();
  function redirectAfterLogin() {
    history.push('/admin');
  }
  function redirectAfterError() {
    history.push('/');
  }
  return (
    <div className="login-wrapper" style={loginStyleCss.loginWrapper}>
      <div className="login-container" style={loginStyleCss.loginContainer}>
        <div className="login-form" style={loginStyleCss.loginForm.container}>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={(values) => {
              if (values) {
                redirectAfterLogin();
              } else {
                redirectAfterError();
              }
            }}
          >
            {({ errors, isSubmitting }) => (
              <Form className="login-form__input" style={loginStyleCss.loginForm.form}>
                <LoginTitle />
                <Field
                  type="email"
                  name="email"
                  placeholder="test@gmail.com"
                  style={loginStyleCss.loginForm.input}
                />
                {errors.email ? <div>{errors.email}</div> : null}
                <Field
                  type="password"
                  name="password"
                  placeholder="password"
                  style={loginStyleCss.loginForm.input}
                />
                {errors.password ? <div>{errors.password}</div> : null}
                <Button btn="btn" disabled={isSubmitting} />
              </Form>
            )}
          </Formik>
        </div>
        <div className="login-hero-img" style={loginStyleCss.loginImgHero}></div>
      </div>
    </div>
  );
};
