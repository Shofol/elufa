import Head from "next/head";
import { Inter } from "@next/font/google";
import FormContainer from "../../components/Register/FormContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <>
      <main className="">
        <FormContainer />
      </main>
    </>
  );
}
