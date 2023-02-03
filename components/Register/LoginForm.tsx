import { Form, Formik } from "formik";
import React from "react";
import Button from "../Buttons/Button";
import { LoginUser } from "../../types/RegisterUserType";
import TextInput from "../Inputs/TextInput";

const LoginForm = ({ initialValues }: { initialValues: LoginUser }) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
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
            <Button type="submit" buttonText="Submit" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
