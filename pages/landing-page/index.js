import React from "react";
import Image from "next/image";
import Webpage from "../../public/webpage.png";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-row my-10">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-white">
            👋 Welcome to <span className="text-broom-500">snippet.so</span>
          </h1>
          <p className="text-white text-lg font-medium my-10 mx-auto">
            Snippet.so is a place where you can save and share your code
            snippets with the world. <br /> Come, Save, Share and Discover
            Others' Snippets.
          </p>
          <div className="flex flex-row justify-center my-5">
            <button className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 text-white font-semibold p-2 text-2xl mx-2 rounded-2xl">
              <Link href="/signup">
                <a> Get Started </a>
              </Link>
            </button>
            <button className="hover:underline text-white font-semibold text-2xl mx-2">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </button>
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
        <h2 className="mx-auto text-white text-3xl font-semibold mt-10">
          Features
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
