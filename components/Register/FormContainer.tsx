import React from "react";
import Image from "next/image";
import RegisterForm from "./RegisterForm";
import { useRouter } from "next/router";
import LoginForm from "./LoginForm";
import AdminLoginForm from "./AdminLoginForm";
import { AuthContextProvider } from "../../context/AuthContextProvider";
import { CustomerData, LoginUser } from "../../types/Customer";
import FogotUserId from "./FogotUserId";
import SendEmail from "./SendEmail";
import UpdatePassword from "./UpdatePassword";

const FormContainer = () => {
  const initialValues: CustomerData = {
    email: "",
    company: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    licenseStartDate: "",
  };

  const initialLoginValues: LoginUser = {
    email: "",
    userId: "",
    password: "",
  };

  const initialPasswordValues: UpdatePassword = {
    password: "",
    confirmPassword: "",
  };

  const router = useRouter();

  return (
    <div className="flex w-screen min-h-screen">
      <div className="w-2/5	hidden lg:flex justify-center items-center bg-gradient-to-tr from-br-blue to-blue-800 relative">
        <Image
          src={
            router.pathname === "/adminLogin"
              ? "/adminLoginBg.png"
              : "/userLoginBg.png"
          }
          fill
          style={{ objectFit: "cover" }}
          alt="verification"
        />
      </div>
      <div className="flex-1 flex flex-col bg-white dark:bg-gray-900 justify-center px-5 lg:px-20 ">
        <Image src="/logo.png" width={100} height={200} alt="logo" />
        <h1 className="text-gray-700 dark:text-gray-200 text-xl mt-10 mb-5 font-poppins">
          Welcome
          {router.pathname === "/addCustomer"
            ? ", Enter the customer details."
            : router.pathname === "/login"
            ? ", Please enter login details."
            : router.pathname === "/login/sendEmail"
            ? ", Please enter your email. A password reset link will be sent."
            : router.pathname === "/login/forgotUserId"
            ? ", Please enter your details. Your user id will be sent to your email."
            : router.pathname === "/login/updatePassword"
            ? ", Set your new password."
            : ""}
        </h1>
        <AuthContextProvider>
          {router.pathname === "/adminDashboard/addCustomer" && (
            <RegisterForm initialValues={initialValues} />
          )}
          {router.pathname === "/login" && (
            <LoginForm initialValues={initialLoginValues} />
          )}
          {router.pathname === "/login/forgotUserId" && (
            <FogotUserId initialValues={initialLoginValues} />
          )}
          {router.pathname === "/login/sendEmail" && (
            <SendEmail initialValues={initialLoginValues} />
          )}
          {router.pathname === "/login/updatePassword" && (
            <UpdatePassword initialValues={initialPasswordValues} />
          )}
          {router.pathname === "/adminLogin" && <AdminLoginForm />}
        </AuthContextProvider>
      </div>
    </div>
  );
};

export default FormContainer;
