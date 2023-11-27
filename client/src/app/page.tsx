"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Images from "@/app/public/images/landing-pic.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className=" min-h-screen justify-center">
      <Header />

      <div className="grid grid-rows-1 grid-flow-col">
        <div className="pt-6 pr-20 pl-10 pb-6">
          <header className="pr-20 pl-20">
            <h1 className=" text-blue-500 mb-4">SQL-Agent-LangChain</h1>
            <h1 className="pr-20 text-7xl font-semibold text-blue-900 my-8">
              Chat With Your Database
            </h1>
            <p className="text-lg text-gray-600">
              CWYD is a platform where users can communicate with their databases using simple english query
            </p>
            {/* request a demo button */}
            <div className="flex pt-9">
              <button className="bg-blue-800 text-white rounded-full py-3 px-6 font-semibold hover:bg-blue-600">
                Request a demo
              </button>
            </div>
          </header>
        </div>
        <div
          className="pl-10 pb-6 pr-10 flex"
          style={{ width: "650px", height: "630px" }}
        >
          <Image
            src="/landing-pic.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover w-full h-full hidden lg:block"
          />
        </div>
      </div>

      {/* 2 container */}
      <div id="Features" className="lg:pl-20 pb-10 pt-10 lg:pr-20 pl-32 pr-10">
        <div className="lg:pr-64 pr-10">
          <h1 className="text-5xl font-normal text-gray-800 my-8 lg:pl-20 lg:pr-64 pr-10">
            What it Offers
          </h1>
        </div>
        <div className="grid grid-rows-1 grid-flow-col pt-16 lg:pl-16 lg:pr-16">
          <div className="flex justify-center border-solid border-blue-800 border-r-2 border-b-2 pt-12 pb-12">
            <p className="text-lg font-medium text-gray-800 my-4 text-center">
              Input Prompts 
            </p>
          </div>
          <div className="flex justify-center border-solid border-blue-800 border-r-2 border-b-2 pt-12 pb-12">
            <p className="text-lg font-medium text-gray-800 my-4 text-center">
              SQL Query Generated
            </p>
          </div>
          <div className=" flex justify-center border-solid border-blue-800 border-b-2 pt-12 pb-12">
            <p className="text-lg font-medium text-gray-800 my-4 text-center">
              Data Table View
            </p>
          </div>
        </div>
        <div className="grid grid-rows-1 grid-flow-col lg:pr-16 pb-16 lg:pl-16">
          <div className="flex justify-center border-solid border-blue-800 border-r-2 pt-12 pb-12">
            <p className="text-lg font-medium text-gray-800 my-4 text-center">
            Light/Dark Mode 
            </p>
          </div>
          <div className="flex justify-center border-solid border-blue-800 border-r-2 pt-12 pb-12">
            <p className="text-lg font-medium text-gray-800 my-4 text-center">
              Prompt History Modal
            </p>
          </div>
          <div className=" flex justify-center pt-12 pb-12">
            <p className="text-lg font-medium text-gray-800 my-4 text-center">
              Authentication 
            </p>
          </div>
        </div>
      </div>

      {/* //  How it can work: */}

      <div id="Working" className="max-w-6xl mx-auto py-10 px-4 pt-20">
        <h1 className="text-5xl font-normal text-gray-800 mb-8">
          How it works:
        </h1>
        <div className="lg:space-y-8 pt-20">
          <div className="lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4">
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl font-bold">
                Sign Up And Log In
              </h1>
              <p className="text-lg font-medium text-gray-800 my-4">
                In the midst of a bustling cityscape, the neon lights painted
                the night in vibrant hues, casting an enchanting glow upon the
                faces of passersby..
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/landing-pic.png"
                alt="Image Description 1"
                className="w-full h-auto max-w-md"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4 pt-20">
            <div className="w-full lg:w-1/2">
              <Image
                src="/landing-pic.png"
                alt="Image Description 2"
                className="w-full h-auto max-w-md"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl font-bold capitalize">
                Set up your Query database
              </h1>
              <p className="text-lg font-medium text-gray-800 my-4">
                In the midst of a bustling cityscape, the neon lights painted
                the night in vibrant hues, casting an enchanting glow upon the
                faces of passersby..
              </p>
            </div>
          </div>

          <div className="lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4 pt-20">
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl font-bold">
                English Prompt Query
              </h1>
              <p className="text-lg font-medium text-gray-800 my-4">
                In the midst of a bustling cityscape, the neon lights painted
                the night in vibrant hues, casting an enchanting glow upon the
                faces of passersby..
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/landing-pic.png"
                alt="Image Description 3"
                className="w-full h-auto max-w-md"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Add spacing between portions */}
          <div className="mb-8"></div>

          <div className="lg:w-3/3 lg:pr-10 lg:flex items-center space-x-4 pt-20">
            <div className="w-full lg:w-1/2">
              <Image
                src="/landing-pic.png"
                alt="Image Description 4"
                className="w-full h-auto max-w-md"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl font-bold">
                Data-table Response View 
              </h1>

              <p className="text-lg font-medium text-gray-800 my-4">
                In the midst of a bustling cityscape, the neon lights painted
                the night in vibrant hues, casting an enchanting glow upon the
                faces of passersby..
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* products */}
      {/* <div className="lg:grid lg:grid-rows-1 lg:grid-flow-col pt-20">
        <div className="pt-6 lg:pr-20 lg:pl-10 pb-6">
          <header className="lg:pr-20 lg:pl-20 pr-10 pl-10">
            <h1 className="lg:pr-20 text-7xl font-semibold text-gray-800 my-8 pt-16 ">
              SyncFlow Recruiter
            </h1>
            <p className="text-lg text-gray-600">
              Syncflow is a modern hiring platform that helps teams source,
              interview, and hire the best talent for their business.
            </p>
          </header>
        </div>
        <div
          className="pt-6 lg:pl-10 flex"
          style={{ width: "780px", height: "500px" }}
        >
          <Image
            src="/syncflow_recruiter.avif"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="lg:grid lg:grid-rows-1 lg:grid-flow-col pb-10 lg:pb-0">
        <div className=" flex" style={{ width: "780px", height: "500px" }}>
          <Image
            src="/syncflow-applicant.webp"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="pt-6 lg:pr-20 lg:pl-10">
          <header className="lg:pr-20 lg:pl-20 pr-10 pl-10">
            <h1 className="lg:pr-20 text-7xl font-semibold text-gray-800 my-8 pt-16 ">
              SyncFlow Applicant
            </h1>
            <p className="text-lg text-gray-600">
              Syncflow is a modern hiring platform that helps teams source,
              interview, and hire the best talent for their business.
            </p>
          </header>
        </div>
      </div> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
