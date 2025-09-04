"use client";

import { SignIn, SignUp } from "@clerk/nextjs";

import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState("login");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative">
      {/* App Title */}
      <h1 className="text-5xl font-bold text-ace mb-6">Ace</h1>

      {/* Card */}
      <div className="bg-gray-100 shadow-lg rounded-2xl w-full max-w-sm text-center relative z-10">
        

        {/* Clerk Auth */}
        {mode === "login" ? (
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-primary hover:bg-teal-700 text-white rounded-full px-4 py-2 w-full",
              },
            }}
            redirectUrl="/dashboard"
          />
        ) : (
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-primary hover:bg-teal-700 text-white rounded-full px-4 py-2 w-full",
              },
            }}
            redirectUrl="/dashboard"
          />
        )}

       

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6">
          Powered by <span className="font-bold">The Air Assist</span>
        </p>
      </div>

      {/* Background wave */}
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#f9a825"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,245.3C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
