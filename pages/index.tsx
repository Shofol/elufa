import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { motion } from "framer-motion";
import { RegisteredUser } from "../types/RegisterUserType";
import RegisterForm from "../components/Register/RegisterForm";
import FormContainer from "../components/Register/FormContainer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Elufasys</title>
        <meta name="description" content="Elufasys" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen min-w-screen flex justify-center items-center">
        <Link className="bg-blue-400 m-10 py-4 px-10" href="/login">
          User Flow
        </Link>
        <Link className="bg-blue-400 m-10 py-4 px-10" href="/adminLogin">
          Admin Flow
        </Link>
      </main>
    </>
  );
}
