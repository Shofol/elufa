import React, { useEffect } from "react";
import Button from "../Buttons/Button";
import { Account, Client, ID } from "appwrite";
import { useRouter } from "next/router";
import { AuthDispatch, useAuth } from "../../context/AuthContextProvider";
import { SET_ADMIN_SESSION } from "../../context/actions";

const AdminLoginForm = () => {
  const dispatch: any = AuthDispatch();
  const client = new Client();
  const account = new Account(client);
  const router = useRouter();

  client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

  useEffect(() => {
    const promise = account.getSession("current");

    promise.then(
      function (response) {
        dispatch({ type: SET_ADMIN_SESSION, isAdminLoggedIn: true });
        router.push("/adminDashboard");
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  }, []);

  const handleClick = async () => {
    // try {
    const URL = await account.createOAuth2Session(
      "google",
      `${window.location.origin}/adminLogin`,
      `${window.location.origin}/adminLogin`
    );
    console.log(URL);
    //   if (URL) {
    //     router.push("/adminDashboard");
    //   }
    // } catch (e) {
    //   router.push("/adminLogin");
    // }
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
      {/* <Formik
        initialValues={initialValues}
        validate={(values) => {
          let errors: any = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
          }

          return errors;
        }}
        onSubmit={(values, actions) => {
          alert(values);
          const account = new Account(client);
          account.createOAuth2Session("google");

          // const promise = account.create(
          //   ID.unique(),
          //   values.email,
          //   values.password
          // );

          // promise.then(
          //   function (response) {
          //     console.log(response);
          //   },
          //   function (error) {
          //     console.log(error);
          //   }
          // );
          // actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="text-gray-500 text-xs font-poppins">
            <div className="flex flex-col  justify-start my-7">
              <div className="flex flex-col flex-1 mb-5">
                <TextInput
                  type="email"
                  name="email"
                  label="Login Email Address"
                  placeholder="Enter Login Email Address"
                />
              </div>

              <div className="flex flex-col flex-1">
                <TextInput
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <div className="flex lg:justify-end">
              <Button type="submit" buttonText="Submit" buttonType="primary" />
            </div>
          </Form>
        )}
      </Formik> */}
    </div>
  );
};

interface FormError {
  email: string | boolean | null;
  password: string | boolean | null;
}

export default AdminLoginForm;
