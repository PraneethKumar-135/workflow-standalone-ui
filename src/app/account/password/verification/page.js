"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import otpBg from "../../../../../public/assets/otpBg.svg";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setOtp } from "@/Context/Slices/resetPasswordSlice";

import "./style.css";

const Page = () => {
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(otpInputs);
  const reset = useSelector((state) => state.resetPassword);
  console.log(reset);

  const handleInputChange = (index, inputValue, event) => {
    console.log("Input change:", index, inputValue, event);
    const newInputs = [...otpInputs];
    newInputs[index] = inputValue;

    // Clear the current input if it's emptied by backspacing
    if (inputValue === "" && event.key === "Backspace" && index > 0) {
      newInputs[index] = "";
      setOtpInputs(newInputs);
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
      return;
    }

    setOtpInputs(newInputs);

    // Enable the next input field if the current one is filled
    if (inputValue && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.removeAttribute("disabled");
        nextInput.focus();
      }
    }

    // Disable previous input fields when backspacing
    if (!inputValue && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };



  const handleVerify = () => {
    console.log("Paste event:", e, index);
    // Logic for OTP verification
    const otp = otpInputs.join("");
    console.log("Verifying OTP:", otp);
    if (otpInputs.some((item) => item === "" || item === undefined)) {
      alert("Invalid Otp");
    } else {
      dispatch(setOtp(otp));
      router.push("/account/password/new-password");
    }
  };

  const handlePaste = (e, index) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain");
    if (pasteData.length === 6) {
      const newInputs = pasteData.split("");
      setOtpInputs(newInputs);
      // Focus on the last input field after pasting
      const lastInput = document.getElementById(`otp-input-${otpInputs.length - 1}`);
      if (lastInput) {
        lastInput.focus();
      }
    }
  };


  return (
    <div className="flex px-10 flex-row items-center h-screen gap-8">
      <div className="flex flex-col h-screen w-[500px] gap-6 p-10">
        <div>
          <Link href="/account/password/reset" className="flex mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            Back
          </Link>
        </div>
        <div className="w-96 h-72 flex flex-col">
          <h1 className="font-segoe-ui text-4xl font-bold leading-11 tracking-tighter text-left mb">
            Enter OTP
          </h1>
          <p className="card-text font-segoe-ui text-l w-[500px] leading-10 tracking-tighter text-left text-gray-400">
            We have shared a code to your registered email address
            robertallen@example.com
          </p>
          <div className="input-field">
            {otpInputs.map((value, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                maxLength={1}
                minLength={1}
                type="number"
                value={value}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  // Ensure only one number is entered
                  if (!isNaN(inputValue) && inputValue.length <= 1) {
                    handleInputChange(index, inputValue, e); // Pass the event object
                  }
                }}
                onPaste={(e) => handlePaste(e, index)}
                // disabled={value !== "" && index < otpInputs.length - 1 && otpInputs[index + 1] !== ""}
                className="otp-input"
              />
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-2 items-center w-[100%]">
            <button
              type="button"
              value="Verify"
              className={`cursor-pointer w-[100%] bg-blue-500 text-white px-3 py-2 rounded  ${otpInputs[3] ? "active" : ""
                }`}
              onClick={handleVerify}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
      <Image src={otpBg} className="w-[650px] mt-4" />
    </div>
  );
};

export default Page;
