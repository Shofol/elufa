import { Form, Formik, FormikErrors } from "formik";
import React from "react";
import Button from "../Buttons/Button";
import TextInput from "../Inputs/TextInput";
import { Account, Client, ID } from "appwrite";
import { useRouter } from "next/router";
import { LoginUser } from "../../types/Customer";

const LoginForm = ({ initialValues }: { initialValues: LoginUser }) => {
  const client = new Client();

  client
    .setEndpoint("http://64.176.40.159:8080/v1")
    .setProject("63e73ee3bce1276c225e");

  const router = useRouter();

  return (
    <div className="max-w-xl">
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          let errors: any = {};
          if (!values.userId) {
            errors.userId = "User ID is Required";
          }

          if (!values.password) {
            errors.password = "Password is Required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
          }

          return errors;
        }}
        onSubmit={(values, actions) => {
          const account = new Account(client);
          router.push("/dashboard");
          // const promise = account.create(
          //   ID.unique(),
          //   values.email,
          //   values.password
          // );

          // promise.then(
          //   function (response) {
          //     console.log(response);
          //   },
          //   function (error) {
          //     console.log(error);
          //   }
          // );
          // actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="text-gray-500 text-xs font-poppins">
            <div className="flex flex-col  justify-start my-7">
              <div className="flex flex-col flex-1 mb-5">
                <TextInput
                  type="text"
                  name="userId"
                  label="User ID"
                  placeholder="Enter User ID"
                />
              </div>

              <div className="flex flex-col flex-1">
                <TextInput
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <div className="flex lg:justify-between items-start">
              <div className="flex flex-col items-start">
                <button className="mb-1 hover:underline">
                  Forgot Password
                </button>
                <button className="hover:underline">Forgot UserID</button>
              </div>
              <Button type="submit" buttonText="Submit" buttonType="primary" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

interface FormError {
  email: string | boolean | null;
  password: string | boolean | null;
}

export default LoginForm;
