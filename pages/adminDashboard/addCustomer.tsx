import Head from "next/head";
import { Inter } from "@next/font/google";
import FormContainer from "../../components/Register/FormContainer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContextProvider";

export default function AddCustomer() {
  const router = useRouter();
  // const authState: any = useAuth();

  useEffect(() => {
    const localData: any = localStorage.getItem("auth");
    const authState: any =
      localData !== "undefined" ? JSON.parse(localData) : undefined;
    if (authState) {
      if (!authState.isAdminLoggedIn) {
        router.push("/adminlogin");
      }
    }
  }, [router]);

  return (
    <>
      <main className="">
        <FormContainer />
      </main>
    </>
  );
}
