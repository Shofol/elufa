import React from "react";
import Button from "../components/Buttons/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-br-blue px-10 py-2 flex flex-col items-end">
        <div className="flex items-center">
          <p className="text-gray-200 text-sm mr-1">user@gmail.com</p>
          <Image src="/verified.png" width={15} height={15} alt="active" />
        </div>
        <p className="text-gray-400 text-xs">Key Expiry Date: July 26, 2024</p>
      </div>

      <div className="w-screen flex dark:bg-gradient-to-tr from-br-blue to-blue-800 flex-1">
        <div className="w-3/5	hidden lg:flex justify-center items-center bg-gradient-to-tr from-br-blue to-blue-800 relative">
          <Image src="/userPortalBg.png" fill alt="verification" />
        </div>
        <div className="w-full flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-3  max-w-5xl mx-auto mt-24"
          >
            <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
              <Button
                additionalClasses="bg-white p-2 h-full"
                icon={{ src: "/2.png", width: 120, height: 120, alt: "test" }}
              />
            </div>
            <div className="bg-blue-500 h-36 w-36 m-5 hover:scale-110 duration-200 shadow-md flex items-center justify-center">
              <Button
                additionalClasses="h-full py-1"
                icon={{ src: "/3.png", width: 135, height: 120, alt: "test" }}
              />
            </div>

            <div className="bg-blue-500 h-36 w-36 m-5 hover:scale-110 duration-200 shadow-md flex items-center justify-center">
              <Button
                additionalClasses="h-full"
                icon={{ src: "/4.png", width: 135, height: 120, alt: "test" }}
              />
            </div>
            <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
              <Button
                additionalClasses="bg-white p-2 h-full"
                icon={{ src: "/1.png", width: 120, height: 120, alt: "test" }}
              />
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

export default dashboard;
