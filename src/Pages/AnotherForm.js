import React from 'react'
import { useFormik } from 'formik'
// import * as Yup from 'yup'
import { Textarea, Select, Option, } from "@material-tailwind/react";



const initialValues = {
  fname: '',
  lname: '',
  gender: '',
  date: '',
  roll: '',
  blood: '',
  religion: '',
  email: '',
  class: '',
  section: '',
  id: '',
  phone: '',
  msg: '',
  image: null,
}


export const AnotherForm = () => {

  const formik = useFormik({
    initialValues,
    //   validationSchema: Yup.object({
    //     name: Yup.string()
    //     .min(2, 'Too Short!')
    //     .max(50, 'Too Long!')
    //     .required('Name is required'),
    //   email: Yup.string().email('Invalid email address').required('Email is required'),
    //   password: Yup.string().min(6).required('Password is required'),
    //   confirm_password: Yup.string()
    //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //     .required('Confirm Password is required'),
    //   msg: Yup.string().min(1).max(50),
    //   country: Yup.string().required("Choose at least one"),
    //   checkboxField: Yup.boolean()
    //     .oneOf([true], "Please accept the terms and conditions")
    //     .required("Please accept the terms and conditions"),
    //   program: Yup.array().min(1, 'Select at least one programming language').required("Select at least one"),
    //   gender: Yup.string().required("Please select one"),
    //   image: Yup.mixed()
    //     .test(
    //       "fileFormat",
    //       "Unsupported Format",
    //       value => !value || (value && ['.png', '.jpg'].includes(value.type))
    //     ),
    // }),

    onSubmit: (value, { resetForm }) => {
      console.log(value);
      resetForm()
    }
  })


  return (
    <div className=" bg-white rounded-md shadow-md w-[90%] m-auto mt-11 py-[15px] px-[30px] ">
      <h1 className='text-[30px] font-bold mb-5'>Add New Students</h1>
      <form onSubmit={formik.handleSubmit} >

        <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1">

          <div className="mb-4">
            <label htmlFor="fname" className="block text-gray-700 font-bold mb-2">First Name *</label>
            <input
              type="text"
              id="fname"
              name="fname"
              autoComplete=''
              placeholder='enter your name'
              value={formik.values.fname}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}

              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.touched.fname && formik.errors.fname ? <p className="text-red-500 mt-2">{formik.errors.fname}</p> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="lname" className="block text-gray-700 font-bold mb-2">Last Name *</label>
            <input
              type="text"
              id="lname"
              name="lname"
              autoComplete=''
              placeholder='enter your name'
              value={formik.values.lname}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}

              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.touched.lname && formik.errors.lname ? <p className="text-red-500 mt-2">{formik.errors.lname}</p> : null}
          </div>

          <div className="">
            <p className="block text-gray-700 font-bold mb-2">Gender *</p>
            <Select label="Gender *" name='gender'
              onChange={(e) => formik.setFieldValue('gender', e)}>
              <Option value='male'>Male</Option>
              <Option value='female'>Female</Option>
              <Option value='others'>Others</Option>
            </Select>
            {formik.touched.gender && formik.errors.gender ? <p className="text-red-500 mt-2">{formik.errors.gender}</p> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
              Date Of Birth *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder='dd/mm/yyyy'
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}

              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.touched.date && formik.errors.date ? <p className="text-red-500 mt-2">{formik.errors.date}</p> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="roll" className="block text-gray-700 font-bold mb-2">
              Roll  </label>
            <input
              type="text"
              id="roll"
              name="roll"
              value={formik.values.roll}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}

              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="">
            <p className="block text-gray-700 font-bold mb-2">Blood Group *</p>
            <Select label="Please Select Group" name='blood'
              onChange={(e) => formik.setFieldValue('blood', e)}>
              <Option value='A'>A+</Option>
              <Option value='A-'>A-</Option>
              <Option value='B'>B+</Option>
              <Option value='B-'>B-</Option>
              <Option value='Q'>Q+</Option>
              <Option value='Q-'>Q-</Option>
            </Select>
            {formik.touched.blood && formik.errors.blood ? <p className="text-red-500 mt-2">{formik.errors.blood}</p> : null}
          </div>

          <div className="">
            <p className="block text-gray-700 font-bold mb-2">Religion *</p>
            <Select label="Please Select Religion" name='religion'
              onChange={(e) => formik.setFieldValue('religion', e)}>
              <Option value='Islam'>Islam</Option>
              <Option value='Hindu'>Hindu</Option>
              <Option value='Christian'>Christian</Option>
              <Option value='Buddhist'>Buddhist</Option>
              <Option value='Others'>Others</Option>
            </Select>
            {formik.touched.religion && formik.errors.religion ? <p className="text-red-500 mt-2">{formik.errors.religion}</p> : null}
          </div>


          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='enter your email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}

              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.touched.email && formik.errors.email ? <p className="text-red-500 mt-2">{formik.errors.email}</p> : null}

          </div>




          <div className="">
            <p className="block text-gray-700 font-bold mb-2">Class *</p>
            <Select label="Please Select Religion" name='class'
              onChange={(e) => formik.setFieldValue('class', e)}>
              <Option value='play'>play</Option>
              <Option value='Nursary'>Nursary</Option>
              <Option value='one'>one</Option>
              <Option value='two'>two</Option>
              <Option value='three'>three</Option>
            </Select>
            {formik.touched.class && formik.errors.class ? <p className="text-red-500 mt-2">{formik.errors.class}</p> : null}
          </div>

          <div className="">
            <p className="block text-gray-700 font-bold mb-2">Section *</p>
            <Select label="Please Select Section" name='section'
              onChange={(e) => formik.setFieldValue('section', e)}>
              <Option value='red'>red</Option>
              <Option value='pink'>pink</Option>
              <Option value='blue'>blue</Option>
            </Select>
            {formik.touched.section && formik.errors.section ? <p className="text-red-500 mt-2">{formik.errors.section}</p> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
              Admission ID
            </label>
            <input
              type="number"
              id="id"
              name="id"
              value={formik.values.id}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>


        </div>


        <div className='grid grid-cols-2 gap-10'>

          <div className="w-[75%]">
            <label htmlFor="message">Shot bio</label>
            <Textarea label="Message"
              id='message'
              name='msg'
              value={formik.values.msg}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
            />




          </div >

          <div className='space-y-2'>
            <label className='block' htmlFor="image">Select Image</label>
            <input
              type="file"
              name='image'
              id='image'
              onChange={(event) => {
                const file = event.target.files[0];
                formik.setFieldValue('image', file)
                let reader = new FileReader();
                reader.onload = () => {
                  if (reader.readyState === 2) {
                    formik.setFieldValue('image', reader.result);
                  }
                }
                reader.readAsDataURL(event.target.files[0])
              }}
            />
            {formik.touched && formik.errors.image ? <p className="text-red-500 mt-2">{formik.errors.image}</p> : null}
          </div>

        </div>

        <div className="flex items-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>


      </form>

    </div>
  )
}
