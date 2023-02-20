import { Form, Formik, FormikErrors } from "formik";
import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import TextInput from "../Inputs/TextInput";
import { useRouter } from "next/router";
import { UpdatePassword } from "../../types/Customer";
import { Account, Client } from "appwrite";
import { toast, ToastContainer } from "react-toastify";

const UpdatePassword = ({
  initialValues,
}: {
  initialValues: UpdatePassword;
}) => {
  const router = useRouter();
  const client = new Client();
  const account = new Account(client);
  const [userEmail, setUserEmail] = useState<string>("");
  client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

  const resetPassword = async (password: string) => {
    const passResponse = await fetch("/api/resetPassword", {
      method: "POST",
      body: JSON.stringify({ email: userEmail, password: password }),
    });
    return passResponse.json();
  };

  useEffect(() => {
    if (router.isReady) {
      setUserEmail(router.query.email + "");
    }
  }, [router]);

  return (
    <div className="max-w-xl">
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          let errors: FormError = {};
          if (!values.password) {
            errors.password = "Password is Required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
          }

          if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm Password is Required";
          } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Password doesn't match";
          }
          console.log(errors);
          return errors;
        }}
        onSubmit={async (values, actions) => {
          const response = await resetPassword(values.password);
          toast(
            response.statusCode === 200
              ? "Password updated successfully"
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
              <div className="flex flex-col flex-1">
                <TextInput
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>

              <div className="flex flex-col flex-1 mt-4">
                <TextInput
                  name="confirmPassword"
                  label="Password"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
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
  password?: string | boolean | null;
  confirmPassword?: string | boolean | null;
}

export default UpdatePassword;
