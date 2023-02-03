import React from "react";
import Button from "../components/Buttons/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const dashboard = () => {
  return (
    <div className="w-screen min-h-screen dark:bg-gradient-to-tr from-br-blue to-blue-800">
      <div className="bg-blue-500 dark:bg-gray-200 w-full px-10 py-2">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" flex flex-wrap justify-center items-center max-w-5xl mx-auto mt-40"
      >
        <Button
          additionalClasses="bg-blue-500 m-5 p-1 hover:scale-110 duration-200 shadow-md"
          icon={{ src: "/1.png", width: 120, height: 120, alt: "test" }}
        />
        <Button
          additionalClasses="bg-blue-500 m-5 p-1 hover:scale-110 duration-200 shadow-md"
          icon={{ src: "/2.png", width: 120, height: 120, alt: "test" }}
        />
        <Button
          additionalClasses="bg-blue-500 m-5 p-1 hover:scale-110 duration-200 shadow-md"
          icon={{ src: "/3.png", width: 120, height: 120, alt: "test" }}
        />
        <Button
          additionalClasses="bg-blue-500 m-5 p-1 hover:scale-110 duration-200 shadow-md"
          icon={{ src: "/4.png", width: 120, height: 120, alt: "test" }}
        />
        <Button
          additionalClasses="bg-blue-500 m-5 p-1 hover:scale-110 duration-200 shadow-md"
          icon={{ src: "/5.png", width: 120, height: 120, alt: "test" }}
        />
        <Button
          additionalClasses="bg-blue-500 m-5 p-1 hover:scale-110 duration-200 shadow-md"
          icon={{ src: "/6.png", width: 120, height: 120, alt: "test" }}
        />
        <Button
          additionalClasses="bg-blue-500 m-5 p-1 hover:scale-110 duration-200 shadow-md"
          icon={{ src: "/7.png", width: 120, height: 120, alt: "test" }}
        />
        <Button
          additionalClasses="bg-blue-500 m-5 p-1 hover:scale-110 duration-200 shadow-md"
          icon={{ src: "/8.png", width: 120, height: 120, alt: "test" }}
        />
        <Button
          additionalClasses="bg-blue-500 m-5 p-1 hover:scale-110 duration-200 shadow-md"
          icon={{ src: "/9.png", width: 120, height: 120, alt: "test" }}
        />
      </motion.div>
    </div>
  );
};

export default dashboard;
