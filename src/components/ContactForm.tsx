import * as yup from "yup";
import { useFormik } from "formik";
import * as emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export default function ContactFrom() {
  const [submitted, setSubmitted] = React.useState(false);

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    phone: yup
      .string()
      .required("Phone Number is required")
      .min(10, "Phone Number must be at least 10 characters"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    message: yup
      .string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        emailjs.send(process.env.REACT_APP_SERVICE_ID!, process.env.REACT_APP_TEMPLATE_ID!, values, process.env.REACT_APP_PUBLIC_KEY!).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
      console.log(values);
    },
  });
  const form = useRef();

 

  return (
    <div className="flex flex-row justify-center items-center h-full gap-2 h-max-[20rem] py-6 shadow p-4 rounded w-full max-w-[40rem]">
      <section className="flex flex-col justify-center items-center w-full">
        <div className="Validation Popup bg-[#0db31a93] border rounded-md p-6">
          <p className="Validation Message">Thank you for your submission!</p>
        </div>
        <div className="flex flex-col w-full">
        
          <p className="font-BubblyBold"> Your Name</p>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="text-red-500 text-xs mb-2">
              {formik.errors.name}
            </div>
          ) : (
            <div className="text-xs mb-2"> &nbsp;</div>
          )}

          <p className="font-BubblyBold"> Your Phone Number</p>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="w-full flex rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="text-red-500 text-xs mb-2">
              {formik.errors.phone}
            </div>
          ) : (
            <div className="text-xs mb-2"> &nbsp;</div>
          )}
          <p className="font-BubblyBold"> Your Email </p>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="flex rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-500 text-xs mb-2">
              {formik.errors.email}
            </div>
          ) : (
            <div className="text-xs mb-2"> &nbsp;</div>
          )}
          <p className="font-BubblyBold"> Your Message</p>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            className="w-full flex resize row-span-5 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          {formik.errors.message && formik.touched.message ? (
            <div className="text-red-500 text-xs mb-2">
              {formik.errors.message}
            </div>
          ) : (
            <div className="text-xs mb-2"> &nbsp;</div>
          )}
          <button
            className="bg-[#3e22a3] text-white p-2 rounded-md font-BubblyBold hover:shadow-lg hover:bg-[#492abb]"
            type="submit"
            onClick={() => formik.handleSubmit()}
          >
            Send
          </button>
        </div>
      </section>
      <style>{`
                .Validation {
                    display: ${submitted ? "flex" : "none"};
                    
                }
            `}</style>
    </div>
  );
}
