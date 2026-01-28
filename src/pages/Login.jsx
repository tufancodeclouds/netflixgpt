// src/pages/Login.jsx
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser, signupUser } from '../features/auth/authThunks';
import { loginSchema, signupSchema } from '../schemas/authSchema';
import { LOGINBG } from '../utils/constants'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (isSignInForm) {
        // Login
        await dispatch(loginUser({
          email: values.email,
          password: values.password,
        })).unwrap();
        toast.success('Welcome back! Login successful', {
          position: 'top-right',
          autoClose: 2000,
        });
      } else {
        // Signup
        await dispatch(signupUser(values)).unwrap();
        toast.success('Account created! Please verify your email', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error(error || 'Authentication failed. Please try again', {
        position: 'top-right',
        autoClose: 4000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      <img
        src={LOGINBG}
        alt="login-bg"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/40"></div>

      <Formik
        initialValues={initialValues}
        validationSchema={isSignInForm ? loginSchema : signupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="bg-black/75 z-10 p-12 w-full max-w-md rounded-lg shadow-2xl relative">
            <h2 className="font-bold text-2xl mb-8 text-white">
              {isSignInForm ? 'Access your account' : 'Create your account'}
            </h2>

            {/* Full Name - Only for Signup */}
            {!isSignInForm && (
              <div className="mb-5">
                <Field
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className={`py-3 px-4 w-full bg-gray-700 text-white outline-none rounded-md focus:ring-2 transition-all ${
                    touched.fullName && errors.fullName
                      ? 'ring-2 ring-red-500'
                      : 'focus:ring-red-600'
                  }`}
                />
                <ErrorMessage
                  name="fullName"
                  component="p"
                  className="text-red-500 text-sm mt-1 ml-1"
                />
              </div>
            )}

            {/* Email */}
            <div className="mb-5">
              <Field
                type="email"
                name="email"
                placeholder="Email Address"
                className={`py-3 px-4 w-full bg-gray-700 text-white outline-none rounded-md focus:ring-2 transition-all ${
                  touched.email && errors.email
                    ? 'ring-2 ring-red-500'
                    : 'focus:ring-red-600'
                }`}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1 ml-1"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={`py-3 px-4 w-full bg-gray-700 text-white outline-none rounded-md focus:ring-2 transition-all ${
                  touched.password && errors.password
                    ? 'ring-2 ring-red-500'
                    : 'focus:ring-red-600'
                }`}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm mt-1 ml-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || loading}
              className={`py-3 px-4 bg-red-600 w-full text-white rounded-md font-semibold hover:bg-red-700 transition-colors ${
                isSubmitting || loading
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              {isSubmitting || loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  {isSignInForm ? 'Signing' : 'Creating account'}
                </span>
              ) : isSignInForm ? (
                'Sign In'
              ) : (
                'Sign Up'
              )}
            </button>

            {/* Toggle Form */}
            <p className="text-gray-400 mt-6 text-sm">
              {isSignInForm ? 'New to Netflix? ' : 'Already have an account? '}
              <span
                onClick={toggleForm}
                className="text-white hover:underline cursor-pointer font-semibold"
              >
                {isSignInForm ? 'Sign up now' : 'Sign in now'}
              </span>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;