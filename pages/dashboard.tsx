import React, { useEffect, useLayoutEffect, useState } from "react";
import Button from "../components/Buttons/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
// import {
//   AuthContextProvider,
//   AuthDispatch,
//   useAuth,
// } from "../context/AuthContextProvider";
import { CustomerData } from "../types/Customer";
import { Account, Client } from "appwrite";
// import { SET_USER_SESSION } from "../context/actions";

const Dashboard = () => {
  const router = useRouter();
  // const authState: any = useAuth();

  const [customer, setCustomer] = useState<CustomerData>({});

  const client = new Client();

  const account = new Account(client);
  // const dispatch: any = AuthDispatch();

  client
    .setEndpoint(
      process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT
        ? process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT
        : ""
    ) // Your API Endpoint
    .setProject(
      process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID
        ? process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID
        : ""
    ); // Your project ID

  useEffect(() => {
    // let isUserLoggedIn = JSON.parse(
    //   localStorage.getItem("auth") || ""
    // ).isUserLoggedIn;
    // if (!isUserLoggedIn) {
    //   router.push("/login");
    // }
  }, [router]);

  useEffect(() => {
    if (router.isReady && router.query.userId) {
      const userId: any = router.query.userId;
      const results: Promise<any> = fetchCustomer("userId", userId);
      results.then((res: any) => {
        setCustomer(res.documents[0]);
      });
    }
  }, [router.isReady]);

  const fetchCustomer = async (fieldName: string, query: string) => {
    const passResponse = await fetch(
      `/api/customer?fieldName=${fieldName}&query=${query}`,
      {
        method: "GET",
      }
    );
    return passResponse.json();
  };

  const getLicenseEndDate = () => {
    let date = new Date(`${customer.licenseEndDate}`).toString()
      ? new Date(`${customer.licenseEndDate}`).toString()
      : new Date(`${customer.trialLicenseEndDate}`).toString()
      ? new Date(`${customer.trialLicenseEndDate}`).toString()
      : "";
    const updatedDate = date.substring(4, 15);
    return updatedDate;
  };

  const logout = () => {
    const promise = account.deleteSession("current");
    promise.then(
      function (response) {
        // dispatch({ type: SET_USER_SESSION, isUserLoggedIn: false });
        router.push("/login");
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-br-blue px-10 py-2 flex justify-end">
        <div className="flex flex-col items-end">
          <div className="flex items-center">
            <p className="text-gray-200 text-sm mr-1">
              {customer ? customer.email : ""}
            </p>
            <Image src="/verified.png" width={15} height={15} alt="active" />
          </div>
          <p className="text-gray-400 text-xs">
            Key Expiry Date: {getLicenseEndDate()}
          </p>
        </div>
        <Button
          icon={{
            src: "/logout.svg",
            width: 15,
            height: 15,
            alt: "logout button",
          }}
          additionalClasses="pl-4"
          action={logout}
        />
      </div>

      <div className="w-screen flex dark:bg-gradient-to-tr from-br-blue to-blue-800 flex-1">
        <div className="w-3/5	hidden lg:flex justify-center items-center bg-gradient-to-tr from-br-blue to-blue-800 relative">
          <Image src="/userPortalBg.png" fill alt="verification" />
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="max-w-5xl flex flex-col items-start mt-10">
            <h2 className="text-left pl-5 font-poppins text-xl">Function</h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 lg:grid-cols-3"
            >
              <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
                <Button
                  additionalClasses="bg-white p-2 h-full"
                  icon={{
                    src: "/2.png",
                    width: 120,
                    height: 120,
                    alt: "test",
                  }}
                />
              </div>
              <div className="bg-blue-500 h-36 w-36 m-5 hover:scale-110 duration-200 shadow-md flex items-center justify-center">
                <Button
                  additionalClasses="h-full py-1"
                  icon={{
                    src: "/3.png",
                    width: 135,
                    height: 120,
                    alt: "test",
                  }}
                />
              </div>

              <div className="bg-blue-500 h-36 w-36 m-5 hover:scale-110 duration-200 shadow-md flex items-center justify-center">
                <Button
                  additionalClasses="h-full"
                  icon={{
                    src: "/4.png",
                    width: 135,
                    height: 120,
                    alt: "test",
                  }}
                />
              </div>
              <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
                <Button
                  additionalClasses="bg-white p-2 h-full"
                  icon={{
                    src: "/1.png",
                    width: 120,
                    height: 120,
                    alt: "test",
                  }}
                />
              </div>
            </motion.div>

            <h2 className="text-left pl-5 font-poppins text-xl mt-10">
              System Interface
            </h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 lg:grid-cols-3"
            >
              <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
                <Button
                  additionalClasses="bg-white p-2 h-full"
                  icon={{
                    src: "/5.png",
                    width: 120,
                    height: 120,
                    alt: "test",
                  }}
                />
              </div>

              <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
                <Button
                  additionalClasses="bg-white p-2 h-full flex items-center"
                  icon={{
                    src: "/6.png",
                    width: 120,
                    height: 120,
                    alt: "test",
                  }}
                />
              </div>
            </motion.div>

            <h2 className="text-left pl-5 font-poppins text-xl mt-10">
              Service
            </h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 lg:grid-cols-3"
            >
              <div className="bg-blue-500 h-36 w-36 m-5 hover:scale-110 duration-200 shadow-md flex items-center justify-center">
                <Button
                  additionalClasses="h-full"
                  icon={{
                    src: "/7.png",
                    width: 135,
                    height: 120,
                    alt: "test",
                  }}
                />
              </div>
              <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
                <Button
                  additionalClasses="bg-white p-2 h-full"
                  icon={{
                    src: "/8.png",
                    width: 120,
                    height: 120,
                    alt: "test",
                  }}
                />
              </div>

              <div className="bg-blue-500 h-36 w-36 m-5 p-1 hover:scale-110 duration-200 shadow-md">
                <div className="bg-white flex justify-center items-center">
                  <Button
                    additionalClasses="p-2 h-full"
                    icon={{
                      src: "/9.png",
                      width: 80,
                      height: 120,
                      alt: "test",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
