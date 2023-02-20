import Head from "next/head";
import { Inter } from "@next/font/google";
import FormContainer from "../../components/Register/FormContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
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
