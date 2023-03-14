import Head from "next/head";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Elufasys</title>
        <meta name="description" content="Elufasys" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="min-h-screen min-w-screen flex items-center relative">
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-40 z-10"></div>
        <Image src="/landingBg.png" fill alt="landing page background" />
        <div className="relative min-h-screen max-w-7xl mx-10 lg:mx-20 flex flex-col items-between z-20">
          <div className="bg-blue-300 bg-opacity-70 max-w-fit px-4 rounded-br-md rounded-bl-md pb-1 pt-2">
            <Image src="/logo.png" width={100} height={40} alt="logo" />
          </div>
          <div className="mt-20">
            <div className="flex items-start">
              <h1 className="text-8xl tracking-wider font-poppins text-white">
                PRICE EQUITY
              </h1>
            </div>
            <h2 className="text-3xl text-white">CALC-ENGINE FOR NSPB</h2>
          </div>
          <div className="flex-1 flex items-center">
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
              <Link
                className="lg:mr-10 flex w-64 justify-between items-center border-2 border-green-400 text-green-400 hover:scale-105 duration-200 mb-5 py-3 px-4 rounded-sm font-bold uppercase bg-green-100 bg-opacity-20"
                href="/login"
              >
                <span>Login</span>
                <Image
                  src="rightArrow.svg"
                  width={8}
                  height={8}
                  alt="right arrow"
                />
              </Link>
              <Link
                className="flex w-64 justify-between items-center border-2 border-green-400 text-green-400 mb-5 py-3 px-4 hover:scale-105 duration-200 rounded-sm font-bold uppercase bg-green-100 bg-opacity-20"
                href="https://elufasys.com/"
                target="_blank"
              >
                <span>Company Website</span>
                <Image
                  src="rightArrow.svg"
                  width={8}
                  height={8}
                  alt="right arrow"
                />
              </Link>
              <Link
                className="flex w-64 justify-between items-center border-2 border-green-400 text-green-400 mb-5 py-3 px-4 hover:scale-105 duration-200 rounded-sm font-bold uppercase bg-green-100 bg-opacity-20"
                href="mailto:info@elufasys.com"
                target="_blank"
              >
                <span>Contact Us</span>
                <Image
                  src="rightArrow.svg"
                  width={8}
                  height={8}
                  alt="right arrow"
                />
              </Link>
            </div>
          </div>
          <Link
            href="/adminlogin"
            className="flex items-center max-w-fit my-5 bg-blue-400 bg-opacity-30 px-4 py-2 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#93c5fd"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            <span className="text-blue-300 ml-2 ">Admin</span>
          </Link>
        </div>
      </main>
    </>
  );
}
