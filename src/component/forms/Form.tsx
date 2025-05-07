"use client";

import axios from "axios";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import { countries } from "@/utils/data/countryCode";
import MainHeading from "@/component/Heading/MainHeading";

const Form = () => {
  // const router = useRouter();
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
    userPhone: "",
    countryCode: "+91",
  });
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "userPhone" ? value.replace(/\D/g, "") : value,
    }));

    if (name === "userPhone" && value.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid number");
    } else {
      setErrorMessage("");
    }

    if (name === "userEmail") {
      setEmailErrorMessage(
        !emailRegex.test(value) ? "Please enter a valid email address" : ""
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    if (formData.userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      setFormRes(false);
      return;
    }

    if (!emailRegex.test(formData.userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      setFormRes(false);
      return;
    }

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "shreeiyengarfoods",
          email: formData.userEmail,
          Name: formData.userName,
          Contact: `${formData.userPhone}`,
          Description: formData.userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        setFormData({
          userName: "",
          userEmail: "",
          userMessage: "",
          userPhone: "",
          countryCode: "+91",
        });
        setFormRes(false);
        // router.push("/thank-you/");
        alert("Form submitted successfully!");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      setFormRes(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-6 flex-col gap-4 text-base w-full h-full  rounded-lg text-light bg-bg1"
      id="contact"

    >
      <div className="flex flex-col gap-2">
        <MainHeading
          h2
          title="Explore Age-old recipes & timeless flavors!"
          className="text-[1.625rem] font-medium text-primary mendl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 bg-bg rounded-lg overflow-hidden">
          <input
            id="Name"
            type="text"
            name="userName"
            aria-label="Name"
            placeholder="Your full name*"
            value={formData.userName}
            onChange={handleChange}
            required
            className="w-full h-max px-4 py-3 outline-none bg-transparent border avenir border-extra-ligth overflow-hidden rounded-lg"
          />
        </div>
        <div className="flex items-center gap-3 bg-bg border border-extra-ligth overflow-hidden rounded-lg">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            aria-label="Country Code"
            required
            className="text-sm text-[#222] outline-none px-[8px] avenir py-3 "
            style={{ width: `${formData.countryCode.length + 9}ch` }}
          >
            {countries.map((country, i) => (
              <option key={i} value={country.code} className="text-sm">
                {country.code} {country.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="userPhone"
            aria-label="Phone Number"
            placeholder="Mobile number*"
            value={formData.userPhone}
            onChange={handleChange}
            required
            maxLength={10}
            className="w-full px-4 py-3 outline-none border-l avenir border-extra-ligth "
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="flex items-center gap-3 bg-bg rounded-lg overflow-hidden">
          <input
            type="text"
            name="userEmail"
            aria-label="Email"
            placeholder="Email ID*"
            value={formData.userEmail}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 outline-none border avenir border-extra-ligth overflow-hidden rounded-lg"
          />
        </div>
        {emailErrorMessage && (
          <p className="text-red-500">{emailErrorMessage}</p>
        )}

        <div className="flex gap-3 bg-bg rounded-lg overflow-hidden">
          <textarea
            name="userMessage"
            aria-label="Message"
            placeholder="Tell us something about your enquiry!"
            value={formData.userMessage}
            onChange={handleChange}
            rows={5}
            className="w-full avenir px-4 py-3 border border-extra-ligth overflow-hidden rounded-lg resize-none outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-ternory text-sm text-white px-5 py-4 avenir font-normal capitalize hover:bg-primary/80 duration-500 rounded-lg"
      >
        {formRes ? "Loading...." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
