import React from "react";
import Image from "next/image";
import Webpage from "../../public/webpage.png";
import Link from "next/link";
import { IoLogInOutline } from "react-icons/io";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-row my-2 md:my-10">
        <div className="">
          <h1 className="text-3xl md:text-5xl font-semibold md:font-bold text-white">
            👋welcome to <span className="text-broom-500">snippet.so</span>
          </h1>
          <p className="text-white text-md md:text-lg text-ju font-medium my-10 mx-0">
            Snippet.so is a place where you can save and share your code
            snippets with the world. <br /> Come, Save, Share and Discover
            Others' Snippets.
          </p>
          <div className="flex flex-row justify-center my-5 text-md md:text-2xl ">
            <button className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-white font-semibold p-2 mx-2 rounded-lg">
              <Link href="/auth">
                <a>
                  <span>Quick Access </span>
                </a>
              </Link>
            </button>
            {/* <button className="hover:underline text-white font-semibold mx-2">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </button> */}
          </div>
        </div>
        {/* <Image
          src={Webpage}
          alt="Webpage Design"
          placeholder="blur"
          loading="lazy"
          className="-ml-10"
        /> */}
      </div>
      <div>
        <h2 className="mx-auto text-white text-xl font-semibold mt-10">
          - Features -
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
