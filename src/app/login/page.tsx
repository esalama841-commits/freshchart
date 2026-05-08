'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function LoginPage() {
  const { setUserToken } = useAuth();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values);
        if (data.message === 'success') {
          localStorage.setItem('userToken', data.token);
          setUserToken(data.token);
          router.push('/');
        }
      } catch (err: any) {
        setError(err.response?.data?.message || 'Occurrence an error');
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="max-w-xl mx-auto my-20 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-green-600">Login Now</h1>
      {error && <div className="p-3 bg-red-100 text-red-700 rounded mb-4">{error}</div>}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Email:</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-2.5 border rounded-md focus:ring-green-500 focus:border-green-500"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Password:</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full p-2.5 border rounded-md focus:ring-green-500 focus:border-green-500"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
          ) : null}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-green-600 text-white px-5 py-2.5 rounded-md hover:bg-green-700 disabled:bg-gray-400"
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
}