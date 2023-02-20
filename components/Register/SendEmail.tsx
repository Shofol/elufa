import { Form, Formik } from "formik";
import React from "react";
import Button from "../Buttons/Button";
import TextInput from "../Inputs/TextInput";
import { LoginUser } from "../../types/Customer";
import { toast, ToastContainer } from "react-toastify";

const SendEmail = ({ initialValues }: { initialValues: LoginUser }) => {
  const sendUserId = async (email: string) => {
    const passResponse = await fetch("/api/reset", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        resetLink: `${window.origin}/login/updatePassword`,
        forgotPassword: true,
      }),
    });
    return passResponse.json();
  };

  return (
    <div className="max-w-xl">
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          let errors: FormError = {};
          if (!values.email) {
            errors.email = "Email is Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          // if (!values.password) {
          //   errors.password = "Password is Required";
          // } else if (values.password.length < 8) {
          //   errors.password = "Password must be at least 8 characters long";
          // }
          return errors;
        }}
        onSubmit={async (values, actions) => {
          const response = await sendUserId(values.email || "");
          toast(
            response.statusCode === 200
              ? "Password reset link sent to email"
              : "Error",
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="text-gray-500 text-xs font-poppins">
            <div className="flex flex-col  justify-start my-7">
              <div className="flex flex-col flex-1 mb-5">
                <TextInput
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Enter Email"
                />
              </div>

              {/* <div className="flex flex-col flex-1">
                <TextInput
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                />
              </div> */}
            </div>

            <div className="flex lg:justify-between items-start">
              <Button type="submit" buttonText="Submit" buttonType="primary" />
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

interface FormError {
  email?: string | boolean | null;
  // password: string | boolean | null;
}

export default SendEmail;
