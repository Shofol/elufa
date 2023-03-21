import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import Button from "../Buttons/Button";
import TextInput from "../Inputs/TextInput";
import { useRouter } from "next/router";
import { CustomerData } from "../../types/Customer";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Account, Client } from "appwrite";
import Link from "next/link";

const RegisterForm = ({ initialValues }: { initialValues: CustomerData }) => {
  const client = new Client();

  const account = new Account(client);

  client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

  const promise = account.getSession("current");
  promise.then(
    function (response) {
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );

  const createCustomer = async (values: CustomerData) => {
    values.userId = values.email
      ? values.email.split("@")[0] + Math.floor(Math.random() * 90000) + 10000
      : "";
    const response: any = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ values: values }),
    });
    return response.json();
  };

  const updatePasswrod = async (response: any) => {
    const passResponse = await fetch("/api/updatePassword", {
      method: "POST",
      body: JSON.stringify({ documentId: response.$id }),
    });
    return passResponse.json();
  };

  const createUser = async (email: any, password: any) => {
    console.log(password);
    const passResponse = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
    });
    return passResponse.json();
  };

  const validate = (values: CustomerData) => {
    const errors: any = {};

    if (!values.email) {
      errors.email = "Customer Email is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.company) {
      errors.company = "Customer Company is Required";
    }

    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is Required";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone Number is Required";
    }

    return errors;
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={async (values, actions) => {
          const response = await createCustomer(values);
          const passResponse = await updatePasswrod(response);
          const userResponse = await createUser(
            values.email,
            passResponse.response
          );

          toast(passResponse.response ? "New customer created" : "Error", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          actions.setSubmitting(false);
          actions.resetForm();
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
            <div className="hidden lg:flex flex-col flex-1"></div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end">
            <Link href="/adminDashboard" className="mx-4 hover:underline">
              Cancel
            </Link>
            <Button type="submit" buttonText="Submit" buttonType="primary" />
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
function userRouter() {
  throw new Error("Function not implemented.");
}
