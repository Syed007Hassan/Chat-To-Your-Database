"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import axios from "axios";
import config from "@/interfaces/Config";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNum, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();

  const success = true;

  const handleSubmit = async (event: any) => {
    const name = firstName + " " + lastName;
    const role = "employer";
    const designation = "HR";
    const phone = parseInt(phoneNum);
    const data = {
      name,
      email,
      password,
      phone,
      companyName,
      role,
      designation,
    };

    if (password !== repeatPassword) {
      alert("Passwords do not match");
    }

    data.email = data.email.toLowerCase();
    try {
      const response = await axios.post(`${config.baseURl}/auth/register`, {
        name,
        email,
        password,
      });
      if (response.data.success) {
        router.push("/login");
      } else {
        // Handle error here
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   if (success) {
  //     router.push("/login");
  //   }
  // }, [router, success]);

  return (
    <div>
      <Header />
      <div className="relative">
        {!success && (
          <div
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 absolute top-4 right-4 transform -translate-y-3/2 z-20"
            role="alert"
          >
            <p className="text-base font-semibold text-gray-900 dark:text-white">
              User Registered Successfully!
            </p>
          </div>
        )}
      </div>
      <div className={`bg-blue-500 p-6`}>
        <Grid
          container
          component="main"
          sx={{
            // height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          // className="h-screen"
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderEndStartRadius: "40px",
              borderTopLeftRadius: "40px",
              height: "83.4vh",
              paddingRight: "0px",
            }}
            className="hidden md:flex"
          />

          <Grid
            item
            xs={12}
            sm={8}
            md={3}
            component={Paper}
            elevation={6}
            square
            sx={
              {
                // borderEndEndRadius: "40px",
                // borderTopRightRadius: "40px",
                // height: "81vh",
              }
            }
            className="rounded md:rounded-tl-none md:rounded-bl-none md:rounded-tr-[40px] md:rounded-br-[40px] md:h-[83vh]"
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>

              <div className="mt-1">
                <h1 className="font-bold text-2xl mb-1">
                  Sign Up To Get Started
                </h1>
              </div>

              <div className="pt-3 container">
                <div className="mb-3 flex space-x-3">
                  <div>
                    <label
                      htmlFor="f_name"
                      className="mb-1 block text-sm font-bold text-gray-900 dark:text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="f_name"
                      className="w-1/2 min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      placeholder="John"
                      onChange={(e) => setFirstName(e.target.value)}
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="l_name"
                      className="mb-1 block text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="l_name"
                      className="w-1/2  min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      placeholder="Doe"
                      onChange={(e) => setLastName(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>

                {/* <div className="w-full mb-4">
                  <label
                    htmlFor="company"
                    className="mb-1 block mt-2 text-sm font-bold text-gray-900 dark:text-white"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                    onChange={(e) => setCompanyName(e.target.value)}
                    required={true}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-bold text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                    onChange={(e) => setPhone(e.target.value)}
                    required={true}
                  />
                </div> */}

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-bold text-gray-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                    placeholder="john.doe@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                  />
                </div>

                <div className="flex space-x-3">
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="mb-1 block text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-1/2 min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      onChange={(e) => setPassword(e.target.value)}
                      required={true}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="repeat_password"
                      className="mb-1 block text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Repeat password
                    </label>
                    <input
                      type="password"
                      id="repeat_password"
                      className="w-1/2 min-w-fit border rounded p-2 transition duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-opacity-50 hover:placeholder-opacity-75"
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>

                <div>
                  <button
                    className="w-full mt-2 bg-blue-500 hover:bg-blue-700 sm:mb-0 text-white font-bold py-2 px-4 rounded-full"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Sign Up ➔
                  </button>
                </div>

                <div className="text-center mt-3 ">
                  <a
                    className="inline-block  align-baseline sm:mt-0 mb-0 font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="/login"
                  >
                    {"Already have an account? Sign In"}
                  </a>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
