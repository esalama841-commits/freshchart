'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema= Yup.object({
    name: Yup.string().min(3, 'Min 3 chars').max(15, 'Max 15 chars').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password must start with uppercase and 6-11 chars').required('Required'),
    rePassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Required'),
    phone: Yup.string().matches(/^01[0125][0-9]{8}$/, 'Invalid Egyptian phone number').required('Required'),
  });

  const formik = useFormik({initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);
        if (data.message === 'success') {
          router.push('/login');
        }} catch (err: any) {
        setError(err.response?.data?.message || 'Error occurred');
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-green-600">Register Now</h1>
      {error && <div className="p-3 bg-red-100 text-red-700 rounded mb-4">{error}</div>}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-sm">Name:</label>
          <input type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className="w-full p-2 border rounded" />
          {formik.touched.name && formik.errors.name && <div className="text-red-500 text-xs">{formik.errors.name}</div>}
        </div><div className="mb-4">
          <label className="block mb-1 text-sm">Email:</label>
          <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="w-full p-2 border rounded" />
          {formik.touched.email && formik.errors.email && <div className="text-red-500 text-xs">{formik.errors.email}</div>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Password:</label>
          <input type="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className="w-full p-2 border rounded" />
          {formik.touched.password && formik.errors.password && <div className="text-red-500 text-xs">{formik.errors.password}</div>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Confirm Password:</label>
          <input type="password" name="rePassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} className="w-full p-2 border rounded" />
          {formik.touched.rePassword && formik.errors.rePassword && <div className="text-red-500 text-xs">{formik.errors.rePassword}</div>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Phone:</label>
          <input type="tel" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} className="w-full p-2 border rounded" />
          {formik.touched.phone && formik.errors.phone && <div className="text-red-500 text-xs">{formik.errors.phone}</div>}
        </div><button type="submit" disabled={isLoading} className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 disabled:bg-gray-400 w-full">
          {isLoading ? 'Registering...' : 'Register Now'}
        </button>
      </form>
    </div>
  );
} 

