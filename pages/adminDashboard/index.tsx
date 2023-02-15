import React, { useEffect, useLayoutEffect, useState } from "react";
import Button from "../../components/Buttons/Button";
import Image from "next/image";
import { calcLength, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContextProvider";

const AdminDashboard = () => {
  const router = useRouter();
  const authState: any = useAuth();

  const handleCustomerButtonClick = () => {
    router.push("/adminDashboard/addCustomer");
  };

  const handleLicenseButtonClick = () => {
    router.push(`${router.pathname}/manageLicense`);
  };

  useEffect(() => {
    console.log(authState.isAdminLoggedIn);
    if (!authState.isAdminLoggedIn) {
      router.push("/adminLogin");
    }
  }, [authState]);

  return (
    <div className="w-screen min-h-screen flex dark:bg-gradient-to-tr from-br-blue to-blue-800">
      <div className="w-3/5	hidden min-h-screen lg:flex justify-center items-center bg-gradient-to-tr from-br-blue to-blue-800 relative">
        <Image src="/adminPortalBg.png" fill alt="verification" />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col max-w-5xl mx-auto justify-center items-start">
          <h2 className="text-left pl-5 font-poppins text-xl">Customer Info</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-3 "
          >
            <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
              <div className="bg-white h-full flex flex-col justify-center items-center">
                <Button
                  action={handleCustomerButtonClick}
                  icon={{
                    src: "/customer.png",
                    width: 90,
                    height: 120,
                    alt: "test",
                  }}
                />
                <p className="font-semibold text-gray-500">CUSTOMER INFO</p>
              </div>
            </div>
            <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
              <div className="bg-white h-full flex flex-col justify-center items-center">
                <Button
                  action={handleLicenseButtonClick}
                  icon={{
                    src: "/licensing.png",
                    width: 90,
                    height: 120,
                    alt: "test",
                  }}
                />
                <p className="font-semibold text-cyan-500">LICENSE INFO</p>
              </div>
            </div>
            <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
              <div className="bg-white h-full flex flex-col justify-center items-center">
                <Button
                  icon={{
                    src: "/smartwatch.png",
                    width: 90,
                    height: 120,
                    alt: "test",
                  }}
                />
                <p className="font-semibold text-cyan-500">ACTIVITY LOG</p>
              </div>
            </div>
          </motion.div>

          <h2 className="text-left pl-5 font-poppins text-xl">Reporting</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-3 "
          >
            <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
              <div className="bg-white h-full flex flex-col justify-center items-center">
                <Button
                  additionalClasses="bg-white"
                  icon={{
                    src: "/sheets.png",
                    width: 90,
                    height: 120,
                    alt: "test",
                  }}
                />
                <p className="font-semibold text-green-500">SYNC SHEETS</p>
              </div>
            </div>

            <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
              <Button
                additionalClasses="bg-white p-2 h-full"
                icon={{ src: "/5.png", width: 120, height: 120, alt: "test" }}
              />
            </div>

            <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
              <Button
                additionalClasses="bg-white p-2 h-full flex items-center"
                icon={{ src: "/6.png", width: 120, height: 120, alt: "test" }}
              />
            </div>
          </motion.div>

          <h2 className="text-left pl-5 font-poppins text-xl">Others</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-3 "
          >
            <div className="bg-blue-500 h-36 w-36 m-5 hover:scale-110 duration-200 shadow-md flex items-center justify-center">
              <Button
                additionalClasses="h-full"
                icon={{ src: "/7.png", width: 135, height: 120, alt: "test" }}
              />
            </div>

            <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
              <Button
                additionalClasses="bg-white p-2 h-full"
                icon={{ src: "/8.png", width: 120, height: 120, alt: "test" }}
              />
            </div>

            <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
              <div className="bg-white flex justify-center items-center">
                <Button
                  additionalClasses="p-2 h-full"
                  icon={{ src: "/9.png", width: 80, height: 120, alt: "test" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
