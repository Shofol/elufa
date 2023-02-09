import { Form, Formik } from "formik";
import React from "react";
import Button from "../Buttons/Button";
import { RegisteredUser } from "../../types/RegisterUserType";
import TextInput from "../Inputs/TextInput";
import { Account, Client, Databases, ID, Permission, Role } from "appwrite";
import { useRouter } from "next/router";

const RegisterForm = ({ initialValues }: { initialValues: RegisteredUser }) => {
  const client = new Client();

  const databases = new Databases(client);

  client.setEndpoint("http://localhost/v1").setProject("63dd1abbce9d9aa7a0aa");
  const account = new Account(client);

  const promise = account.createEmailSession(
    "jahananower@gmail.com",
    "#ElUfA420$"
  );

  promise.then(
    function (response) {
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );

  const router = useRouter();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          router.push("/adminDashboard");
          return;
          // alert(JSON.stringify(values, null, 2));

          const today = new Date();
          const endDate = new Date();
          endDate.setDate(today.getDate() + 364);

          const promise = databases.createDocument(
            "63e4e48ae593c02f0853",
            "63e4e49988ec6cfee60f",
            ID.unique(),
            {
              email: values.email,
              company: values.company,
              firstName: values.firstName,
              lastName: values.lastName,
              phoneNumber: values.phoneNumber,
              licenseStartDate: today,
              licenseEndDate: endDate,
            }
          );

          promise.then(
            function (response) {
              console.log(response); // Success
            },
            function (error) {
              console.log(error); // Failure
            }
          );

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
            <Button type="submit" buttonText="Submit" buttonType="primary" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
function userRouter() {
  throw new Error("Function not implemented.");
}
