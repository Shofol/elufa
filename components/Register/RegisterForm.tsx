import { Form, Formik } from "formik";
import React from "react";
import Button from "../Buttons/Button";
import { RegisteredUser } from "../../types/RegisterUserType";
import TextInput from "../Inputs/TextInput";

const RegisterForm = ({ initialValues }: { initialValues: RegisteredUser }) => {
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
          <div className="flex flex-col lg:flex-row justify-start lg:items-center my-7">
            <div className="flex flex-col flex-1 lg:mr-5 mb-5 lg:mb-0">
              <TextInput
                type="email"
                name="email"
                label="Customer Email"
                placeholder="Enter Customer Email"
              />
            </div>

            <div className="flex flex-col flex-1">
              <TextInput
                name="company"
                label="Company"
                placeholder="Enter Company Name"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-start lg:items-center my-7">
            <div className="flex flex-col flex-1 lg:mr-5 mb-5 lg:mb-0">
              <TextInput
                name="firstName"
                label="First Name"
                placeholder="Enter First Name"
              />
            </div>

            <div className="flex flex-col flex-1">
              <TextInput
                name="lastName"
                label="Last Name"
                placeholder="Enter Last Name"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-start lg:items-center my-7">
            <div className="flex flex-col flex-1 lg:mr-5 mb-5 lg:mb-0">
              <TextInput
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="flex flex-col flex-1">
              <TextInput
                name="licenseStartDate"
                label="License Start Date"
                placeholder="Enter License Start Date"
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

export default RegisterForm;
