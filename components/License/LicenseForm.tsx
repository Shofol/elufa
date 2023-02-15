import { Formik, Form, useFormikContext, useField } from "formik";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { CustomerData, LicenseStatus } from "../../types/Customer";
import Button from "../Buttons/Button";
import TextInput from "../Inputs/TextInput";
import { Switch } from "@headlessui/react";
import { Combobox } from "@headlessui/react";
import "react-toastify/dist/ReactToastify.css";

const LicenseForm = ({ initialValues }: { initialValues: CustomerData }) => {
  const [initialFormValues, setInitialFormValues] = useState(initialValues);
  const customerValue: CustomerData = {
    userId: "",
    email: "",
    company: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };
  const [isLicenseActive, setIsLicenseActive] = useState(false);
  const [isTrialLicenseActive, setIsTrialLicenseActive] = useState(
    initialFormValues.isTrial
  );
  const [licenseNumber, setLicenseNumber] = useState(null);
  const [filteredCustomer, setFilteredCustomer] = useState<CustomerData[]>([]);
  const [selectedCustomer, setSelectedCustomer] =
    useState<CustomerData>(customerValue);

  const [customerId, setCustomerId] = useState(null);

  // update the fields with customer value
  const handleChange = (key: string, value: string) => {
    const clonedCustomer: any = structuredClone(selectedCustomer);
    const matchedCustomer: any = filteredCustomer.filter(
      (customer: any) => customer[`${key}`] === value
    )[0];
    Object.keys(clonedCustomer).map((key: any) => {
      clonedCustomer[`${key}`] = matchedCustomer[`${key}`];
    });
    setIsLicenseActive(
      matchedCustomer.licenseStartDate &&
        matchedCustomer.licenseStartDate !== ""
    );
    setIsTrialLicenseActive(matchedCustomer.isTrial);
    setLicenseNumber(matchedCustomer.licenseNumber);
    setCustomerId(matchedCustomer.$id);
    setSelectedCustomer(clonedCustomer);
    if (matchedCustomer.licenseStartDate) {
      const clonedValues = structuredClone(initialFormValues);
      clonedValues.licenseStartDate = matchedCustomer.licenseStartDate;
      clonedValues.licenseEndDate = matchedCustomer.licenseEndDate;
      setInitialFormValues(clonedValues);
    }

    if (matchedCustomer.isTrial) {
      const clonedValues = structuredClone(initialFormValues);
      clonedValues.trialLicenseEndDate = matchedCustomer.trialLicenseEndDate;
      clonedValues.tiralLicenseStartDate =
        matchedCustomer.tiralLicenseStartDate;
      setInitialFormValues(clonedValues);
    }
  };

  // searching by query
  const handleSearch = async (fieldName: string, query: string) => {
    const results: any = await fetchCustomer(fieldName, query);
    setFilteredCustomer(results.documents);
  };

  const fetchCustomer = async (fieldName: string, query: string) => {
    const passResponse = await fetch(
      `/api/customer?fieldName=${fieldName}&query=${query}`,
      {
        method: "GET",
      }
    );
    return passResponse.json();
  };

  const generateLicense = async () => {
    const response = await fetch("/api/generateLicense", {
      method: "POST",
      body: JSON.stringify({ documentId: customerId }),
    });
    toast(response.status === 200 ? "License Generated" : "Error", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return response.json();
  };

  const updateLicense = async (values: CustomerData) => {
    const response = await fetch("/api/customer", {
      method: "PUT",
      body: JSON.stringify({ id: customerId, values: values }),
    });

    const emailResponse = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({ id: customerId }),
    });
    resetAll();
    toast(
      response.status === 200 && emailResponse.status === 200
        ? "License Updated and email sent to the user"
        : "Error",
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
    return response.json();
  };

  const resetAll = () => {
    setCustomerId(null);
    const cloned = structuredClone(customerValue);
    setSelectedCustomer(cloned);
    setIsLicenseActive(false);
    setIsTrialLicenseActive(false);
    setFilteredCustomer([]);
    setLicenseNumber(null);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full">
      <div className="text-gray-500 text-xs font-poppins max-w-2xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-start lg:items-center">
          {Object.entries(selectedCustomer).map((entry: any) => {
            const key = entry[0];
            const value = entry[1];
            return (
              <div
                key={key}
                className="flex flex-col flex-1 lg:odd:mr-5 mb-5 relative"
              >
                <Combobox value={value} onChange={(e) => handleChange(key, e)}>
                  <Combobox.Label className="font-bold mb-1 dark:text-gray-200 capitalize">
                    Customer {key}
                  </Combobox.Label>
                  <Combobox.Input
                    placeholder={`Enter Customer ${key}`}
                    onChange={(event) => handleSearch(key, event.target.value)}
                    className=" bg-white dark:border-none dark:bg-gray-700 dark:text-gray-200 border px-3 py-3 rounded-md text-xs focus:border-br-blue outline-none"
                  />
                  {filteredCustomer.length > 0 && (
                    <Combobox.Options className="absolute top-12 left-0 z-10 max-h-48 overflow-y-scroll w-full bg-white dark:border-none dark:bg-gray-700 dark:text-gray-200 border ">
                      {filteredCustomer.map((customer: any) => (
                        <Combobox.Option
                          key={customer.$id}
                          value={customer[`${key}`]}
                          className="mb-1 px-2 py-2 hover:bg-gray-500 cursor-pointer z-100"
                        >
                          {customer[`${key}`]}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}
                </Combobox>
              </div>
            );
          })}
        </div>
        {!licenseNumber && (
          <div className="flex lg:justify-end">
            <Button
              type="button"
              buttonText="Generate License"
              buttonType="primary"
              icon={{
                src: "/reload.svg",
                width: 12,
                height: 12,
                alt: "license",
                class: "mr-1 py-1",
              }}
              action={generateLicense}
            />
          </div>
        )}
        <Formik
          initialValues={initialFormValues}
          enableReinitialize
          onSubmit={async (values, actions) => {
            if (isLicenseActive) {
              updateLicense({
                licenseStartDate: values.licenseStartDate,
                licenseEndDate: values.licenseEndDate,
                licenseStatus: LicenseStatus.ACTIVE,
                isTrial: false,
                tiralLicenseStartDate: "",
                trialLicenseEndDate: "",
              });
            } else if (isTrialLicenseActive) {
              updateLicense({
                tiralLicenseStartDate: values.tiralLicenseStartDate,
                trialLicenseEndDate: values.trialLicenseEndDate,
                isTrial: true,
                licenseStartDate: "",
                licenseEndDate: "",
                licenseStatus: LicenseStatus.ACTIVE,
              });
            }
            actions.resetForm();
            actions.setSubmitting(false);
          }}
        >
          <Form className="text-gray-500 text-xs font-poppins max-w-2xl mx-auto w-full">
            <div className="flex items-center mb-4">
              <Switch
                checked={isLicenseActive}
                onChange={setIsLicenseActive}
                disabled={isTrialLicenseActive || !customerId}
                className={`${
                  isLicenseActive ? "bg-blue-800" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full mr-2`}
              >
                <span className="sr-only">Activate License</span>
                <span
                  className={`${
                    isLicenseActive ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
              <span className="dark:text-gray-200">Activate License</span>
            </div>
            {isLicenseActive && (
              <div className="flex flex-col lg:flex-row justify-start lg:items-center my-7">
                <div className="flex flex-col flex-1 lg:mr-5 mb-5 lg:mb-0">
                  <TextInput
                    name="licenseStartDate"
                    label="License Start Date"
                    type="date"
                    placeholder="Enter License Start Date"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <ConditionalDateInput
                    dependOn="licenseStartDate"
                    name="licenseEndDate"
                    remainingDays="364"
                  >
                    <TextInput
                      name="licenseEndDate"
                      label="License End Date"
                      placeholder="Enter License End Date"
                      type="date"
                    />
                  </ConditionalDateInput>
                </div>
              </div>
            )}
            <div className="flex items-center">
              <Switch
                checked={isTrialLicenseActive}
                onChange={setIsTrialLicenseActive}
                disabled={isLicenseActive || !customerId}
                className={`${
                  isTrialLicenseActive ? "bg-blue-800" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full mr-2`}
              >
                <span className="sr-only">Activate Trial License</span>
                <span
                  className={`${
                    isTrialLicenseActive ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
              <span className="dark:text-gray-200">Activate Trial License</span>
            </div>
            {isTrialLicenseActive && (
              <div className="flex flex-col lg:flex-row justify-start lg:items-center my-7">
                <div className="flex flex-col flex-1 lg:mr-5 mb-5 lg:mb-0">
                  <TextInput
                    name="tiralLicenseStartDate"
                    label="Tiral License Start Date"
                    placeholder="Enter Tiral License Start Date"
                    type="date"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <ConditionalDateInput
                    dependOn="tiralLicenseStartDate"
                    name="trialLicenseEndDate"
                    remainingDays="29"
                  >
                    <TextInput
                      name="trialLicenseEndDate"
                      label="Trial License End Date"
                      placeholder="Enter Trial License End Date"
                      type="date"
                    />
                  </ConditionalDateInput>
                </div>
              </div>
            )}
            <div className="flex lg:justify-end">
              <Button type="submit" buttonText="Submit" buttonType="primary" />
            </div>
          </Form>
        </Formik>
        <ToastContainer />
      </div>
    </div>
  );
};

const ConditionalDateInput = (props: any) => {
  const { values, setFieldValue }: { values: any; setFieldValue: any } =
    useFormikContext();
  const dependOnField = props.dependOn;
  const dependOnFieldValue = values[`${dependOnField}`];
  useEffect(() => {
    // set the value of textC, based on textA and textB
    if (dependOnFieldValue.trim() !== "") {
      // adding number of days for license activation
      let endDate = new Date(dependOnFieldValue);
      endDate.setDate(endDate.getDate() + +props.remainingDays);

      // adjust timezone - https://stackoverflow.com/a/29774197/9695503
      const offset = endDate.getTimezoneOffset();
      endDate = new Date(endDate.getTime() - offset * 60 * 1000);

      // updating the end date value with format of yyyy-mm-dd
      setFieldValue(props.name, endDate.toISOString().substring(0, 10));
    }
  }, [dependOnFieldValue]);

  return <>{props.children}</>;
};

export default LicenseForm;
