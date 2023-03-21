import React, { useEffect } from "react";
import Button from "../Buttons/Button";
import { Account, Client, ID } from "appwrite";
import { useRouter } from "next/router";
// import { AuthDispatch, useAuth } from "../../context/AuthContextProvider";
// import { SET_ADMIN_SESSION } from "../../context/actions";

const AdminLoginForm = () => {
  // const dispatch: any = AuthDispatch();
  const client = new Client();
  const account = new Account(client);
  const router = useRouter();
  client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

  useEffect(() => {
    if (router.isReady && router.query["fromRedirectSuccess"]) {
      const promise = account.getSession("current");

      promise.then(
        function (response) {
          localStorage.setItem(
            "auth",
            JSON.stringify({ isAdminLoggedIn: true })
          );
          // dispatch({ type: SET_ADMIN_SESSION, isAdminLoggedIn: true });
          router.push("/adminDashboard");
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    }
  }, [router.isReady]);

  const handleClick = async () => {
    // try {
    const URL = await account.createOAuth2Session(
      "google",
      `${window.location.origin}/adminlogin?fromRedirectSuccess=true`,
      `${window.location.origin}/adminlogin?fromRedirectFailure=true`
    );
  };

  return (
    <div className="max-w-xl">
      <Button
        additionalClasses="hover:opacity-80 duration-200"
        icon={{
          src: "/google_signin.png",
          alt: "google",
          width: "200",
          height: "100",
        }}
        action={handleClick}
      ></Button>
    </div>
  );
};

interface FormError {
  email: string | boolean | null;
  password: string | boolean | null;
}

export default AdminLoginForm;
