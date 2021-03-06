import Head from "next/head";
import Image from "next/image";
import ComputerCoding from "../public/SignupPicture.jpg";

import { HiLockClosed } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa";

import firebase from "../firebase/clientApp";

export default function Signup() {
  // Configure FirebaseUI.
  const uiConfig = {
    // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/",
    // We will display GitHub as auth providers.
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
  };

  return (
    <div className="md:flex flex-row my-8 md:my-10 mx-3 md:mx-5">
      <div className="items-center justify-center rounded-lg bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="my-3 text-center text-lg font-medium text-gray-600">
            Login
          </h1>
          <div className="flex flex-col">
            {/* Google */}
            <button className="bg-white shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg">
              <div className="flex flex-row ">
                <FcGoogle className="my-auto text-3xl" />
                <h3 className="text-gray-800 text-md font-medium my-auto mx-2">
                  Login with Google
                </h3>
              </div>
            </button>
            {/* Twitter */}
            <button
              className="bg-white shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg"
              style={{ background: "#1DA1F2" }}
            >
              <div className="flex flex-row text-white ">
                <FaTwitter className="my-auto text-3xl" />
                <h3 className="text-md font-medium my-auto mx-2">
                  Login with Twitter
                </h3>
              </div>
            </button>
            {/* Github */}
            <button
              className="bg-white shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg"
              style={{ background: "#211F1F" }}
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            >
              <div className="flex flex-row text-white">
                <FaGithub className="my-auto text-3xl" />
                <h3 className=" text-md font-medium my-auto mx-2">
                  Login with Github
                </h3>
              </div>
            </button>
          </div>
        </div>

        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
            alt="Workflow"
          /> */}
            <h1 className="my-3 text-center text-xl font-semibold text-gray-900">
              {/* Or */}
            </h1>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              start your 14-day free trial
            </a>
          </p> */}
          </div>
          {/* <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <HiLockClosed
                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                </span>
                Create Account
              </button>
            </div>
          </form> */}
        </div>
      </div>
      {/* <div className="md:w-1/2 invisible md:visible">
        <Image
          src={ComputerCoding}
          alt="Photo by Lewis Kang'ethe Ngugi on Unsplash"
          placeholder="blur"
          loading="lazy"
          className=" rounded-lg"
        />
      </div> */}
    </div>
  );
}
