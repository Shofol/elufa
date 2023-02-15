import Head from "next/head";
import { Inter } from "@next/font/google";
import FormContainer from "../../components/Register/FormContainer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContextProvider";

export default function AddCustomer() {
  const router = useRouter();
  const authState: any = useAuth();

  useEffect(() => {
    console.log(authState.isAdminLoggedIn);
    if (!authState.isAdminLoggedIn) {
      router.push("/adminLogin");
    }
  }, [authState]);

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
}
