import React, { useEffect } from "react";
import LicenseForm from "../../components/License/LicenseForm";
import { CustomerData } from "../../types/Customer";
import Image from "next/image";
import { useRouter } from "next/router";

const ManageLicense = () => {
  const router = useRouter();

  useEffect(() => {
    const localData: any = localStorage.getItem("auth");
    const authState: any =
      localData !== "undefined" ? JSON.parse(localData) : undefined;

    if (authState) {
      console.log(authState.isAdminLoggedIn);
      if (!authState.isAdminLoggedIn) {
        router.push("/adminlogin");
      }
    }
  }, [router]);

  const initialValues: CustomerData = {
    email: "",
    company: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    licenseStartDate: "",
    licenseEndDate: "",
    tiralLicenseStartDate: "",
    trialLicenseEndDate: "",
    isTrial: false,
  };

  return (
    <div className="w-screen min-h-screen flex dark:bg-gradient-to-tr bg-white dark:bg-gray-900">
      <div className="w-3/5	hidden min-h-screen lg:flex justify-center items-center relative">
        <Image src="/adminPortalBg.png" fill alt="verification" />
      </div>
      <LicenseForm initialValues={initialValues} />
    </div>
  );
};

export default ManageLicense;
