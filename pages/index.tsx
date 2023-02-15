import Head from "next/head";
import { Inter } from "@next/font/google";
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
