import { Form, Formik, FormikErrors } from "formik";
import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import TextInput from "../Inputs/TextInput";
import { useRouter } from "next/router";
import { LoginUser } from "../../types/Customer";
import { Account, Client } from "appwrite";
import Link from "next/link";

const LoginForm = ({ initialValues }: { initialValues: LoginUser }) => {
  const router = useRouter();
  const client = new Client();
  const account = new Account(client);
  client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

  const login = async (userId: string, password: string) => {
    const passResponse = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ userId: userId, password: password }),
    });
    return passResponse.json();
  };

  // const createSession = async (email: string, password: string) => {
  //   const passResponse = await fetch("/api/userSession", {
  //     method: "POST",
  //     body: JSON.stringify({ email: email, password: password }),
  //   });
  //   return passResponse.json();
  // };

  useEffect(() => {
    localStorage.removeItem("auth");
  }, []);

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
        onSubmit={async (values, actions) => {
          const response = await login(values.userId, values.password);
          const userEmail = JSON.parse(response.response).email;
          const userPassword = values.password;

          const promise: any = account.createEmailSession(
            userEmail,
            userPassword
          );
          promise.then(
            function (response: any) {
              console.log(response);
              if (response.$id) {
                localStorage.setItem(
                  "auth",
                  JSON.stringify({ isUserLoggedIn: true })
                );
                router.push(`/dashboard?userId=${values.userId}`);
              }
            },
            function (error: any) {
              console.log(error); // Failure
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
                <Link href="/login/sendEmail" className="mb-1 hover:underline">
                  Forgot Password
                </Link>
                <Link href="/login/forgotUserId" className="hover:underline">
                  Forgot UserID
                </Link>
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
