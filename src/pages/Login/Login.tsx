import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { Button, ErrorMessage, Loader } from '../../atoms';
import { Input } from '../../molecules';
import { httpService } from '../../services';
import { endpoints } from '../../config';

import { initialLoginForm, validationSchema } from './Login.validation';
import { AppContext } from '../../context/appContext';

export const Login = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    values: loginForm,
    errors,
    handleSubmit,
    handleChange,
    isSubmitting,
  } = useFormik({
    initialValues: initialLoginForm(),
    validateOnBlur: true,
    validateOnMount: false,
    validateOnChange: false,
    initialStatus: false,
    validationSchema,
    async onSubmit(formValues) {
      try {
        const response = await httpService.POST(endpoints.login.url, formValues);
        setToken?.(response.token);
      } catch(err: any) {
        setErrorMessage(err.message);
      }
    }
  });

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const clearError = () => {
    setErrorMessage('');
  }

  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans" data-testid="login-page">
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">Login</span>    
          {errorMessage && <ErrorMessage testId="login-page-error" className="mb-4 block font-medium text-base" message={errorMessage} />}  
          <form className="mb-4" onSubmit={handleSubmit}>
            <Input
              testId="login-page-username"
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              containerClass="mb-8"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={loginForm.username}
              errorMessage={errors.username}
              onFocus={clearError}
            />
            <Input
              testId="login-page-password"
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              containerClass="mb-8"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              value={loginForm.password}
              errorMessage={errors.password}
              onFocus={clearError}
            />
            <Button
              testId="login-page-submit"
              className={`bg-green-500 flex items-center hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded ${isSubmitting && 'bg-gray-300'}`}
              type="submit"
              disabled={isSubmitting}
            >
              Sign In {isSubmitting && (<Loader className='ml-2 fill-gray-500' />)}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
