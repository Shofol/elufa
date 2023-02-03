import { Form, Formik, FormikErrors } from "formik";
import React from "react";
import Button from "../Buttons/Button";
import { LoginUser } from "../../types/RegisterUserType";
import TextInput from "../Inputs/TextInput";
import { Account, Client, ID } from "appwrite";

const LoginForm = ({ initialValues }: { initialValues: LoginUser }) => {
  const client = new Client();

  client.setEndpoint("http://localhost/v1").setProject("63dd1abbce9d9aa7a0aa");

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          let errors: any = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
          }

          return errors;
        }}
        onSubmit={(values, actions) => {
          alert(values);
          const account = new Account(client);

          const promise = account.create(
            ID.unique(),
            values.email,
            values.password
          );

          promise.then(
            function (response) {
              console.log(response);
            },
            function (error) {
              console.log(error);
            }
          );
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
                  label="Customer Email"
                  placeholder="Enter Customer Email"
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

            <div className="flex lg:justify-end">
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
