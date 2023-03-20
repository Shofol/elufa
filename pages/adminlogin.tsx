import Head from "next/head";
import React from "react";
import FormContainer from "../components/Register/FormContainer";

const adminLogin = () => {
  return (
    <>
      <Head>
        <title>Elufasys</title>
        <meta name="description" content="Elufasys" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <FormContainer />
      </main>
    </>
  );
};

export default adminLogin;
