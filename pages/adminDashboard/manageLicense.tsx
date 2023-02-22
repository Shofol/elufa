import React, { useEffect } from "react";
import LicenseForm from "../../components/License/LicenseForm";
import { CustomerData } from "../../types/Customer";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContextProvider";

const ManageLicense = () => {
  const router = useRouter();
  const authState: any = useAuth();

  useEffect(() => {
    console.log(authState.isAdminLoggedIn);
    if (!authState.isAdminLoggedIn) {
      router.push("/adminlogin");
    }
  }, [authState]);

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
