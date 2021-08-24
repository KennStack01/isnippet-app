import React from "react";
import Image from "next/image";
import Webpage from "../../public/webpage.png";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-row mt-36">
        <h1 className="text-5xl font-bold text-white ml-3 mr-48">
          Huge Welcome to 🎨iSnippet
        </h1>
        <Image
          src={Webpage}
          alt="Webpage Design"
          placeholder="blur"
          loading="lazy"
          className="-ml-10"
        />
      </div>
    </div>
  );
};

export default LandingPage;
