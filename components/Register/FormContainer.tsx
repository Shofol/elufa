import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LoginUser, RegisteredUser } from "../../types/RegisterUserType";
import RegisterForm from "./RegisterForm";
import { useRouter } from "next/router";
import LoginForm from "./LoginForm";
import AdminLoginForm from "./AdminLoginForm";

const FormContainer = () => {
  const initialValues: RegisteredUser = {
    email: "",
    company: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    licenseStartDate: "",
  };

  const initialLoginValues: LoginUser = {
    email: "",
    password: "",
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
        {/* <motion.div
          animate={{ translateY: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/verification.svg"
            width={300}
            height={300}
            alt="verification"
          />
        </motion.div> */}
      </div>
      <div className="flex-1 flex flex-col bg-white dark:bg-gray-900 justify-center px-5 lg:px-20 ">
        <Image src="/logo.png" width={100} height={200} alt="logo" />
        <h1 className="text-gray-700 dark:text-gray-200 text-xl mt-10 mb-5 font-poppins">
          Welcome,{" "}
          {router.pathname === "/"
            ? "Enter the customer details."
            : "Please enter login details."}
        </h1>
        {router.pathname === "/addCustomer" && (
          <RegisterForm initialValues={initialValues} />
        )}
        {router.pathname === "/login" && (
          <LoginForm initialValues={initialLoginValues} />
        )}
        {router.pathname === "/adminLogin" && <AdminLoginForm />}
      </div>
    </div>
  );
};

export default FormContainer;
