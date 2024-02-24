"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: " ",
  password: " ",
};

const signUpValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string().min(5).required("Please enter password"),
});

function Page() {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div style={{backgroundImage:"/commonStyle/bg.jpg"}}>
      <div className="flex justify-center  item-center h-screen  mt-40px">
        <div className="w-90 p-40 shadow-lg">
          <h3 className="text-3xl  text-white text-bold mx-12">Login</h3>
          <form className="grid gap-y-7" onSubmit={handleSubmit}>
            <div className="">
              <i className="pi pi-envelope  absolute mx-2 h-2 w-4 mt-3"></i>
              <input
                type="email"
                className="w-60  h-10 bg-white-light text-black py-2 px-1 focus:bg-white-medium"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
            </div>
            {errors.email && <small>{errors.email}</small>}

            <div>
              <i className="pi pi-lock absolute mx-2 h-2 w-4 mt-3"></i>
              <input
                type="password"
                className="w-60  h-10 text-black bg-white-light"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            {errors.password && <small>{errors.password}</small>}
            <div className="grid gap-y-6 mx-1 ">
              <div className="flex gap-x-5">
                <div className="flex items-center ">
                  <input
                    type="checkbox"
                    value=""
                    name="bordered-checkbox"
                    className="w-4 h-4  text-blue-600  focus:ring-white-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span>Remember me</span>
                </div>
                <a href="#">forgot me?</a>
              </div>
              <button
                className=" w-65  h-19.5 mx-0 bg-white hover:bg-violet-600 active:bg-white-700   focus:outline-none focus:ring focus:ring-violet-300 rounded-full"
                type="submit"
              >
                login
              </button>
            </div>
          </form>
          <div className="grid gap-y-6 mx-1 "></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
