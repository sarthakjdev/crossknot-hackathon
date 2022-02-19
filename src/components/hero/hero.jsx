import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";
import calendarIcon from "../../../public/images/calendar.svg";
import locationIcon from "../../../public/images/location.svg";
import landingPageImage from "../../../public/images/hero/landingImage.svg";
import Timer from '../timer'
import headingImage from "../../../public/images/hero/heading.svg"

export default function HeroSection() {

  // fetching data for devfolio apply button 
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="flex items-center justify-evenly lg:flex-col">
      <div className="flex flex-col justify-evenly items-center">

        {/* illustration for smaller screens */}
      <div className="hidden md:flex"><Image src={landingPageImage} alt="landing page illustration" /></div>

        {/* crossknot hacks heading */}
        <div className="relative flex  justify-center items-center">
          {/* <h1 className="absolute text-center text-8xl w-quarter_past stroke-text font-secondary font-extrabold md:m-auto md:text-6xl sm:text-4xl">Crossknot Hacks</h1> */}
          {/* <h1 className=" text-center text-8xl w-quarter_past text-primary font-secondary font-extrabold md:m-auto md:text-6xl sm:text-4xl">Crossknot Hacks</h1> */}
          <Image src={headingImage} alt="crossknot heading" />
        </div>

        {/* time and place of the hackathon */}
        <div className="flex flex-col mt-6">
          <h2 className="items-center flex">
            <i className="mr-2">
              <Image src={calendarIcon} alt="calendarIcon" />
            </i>{" "}
            27 Feb - 28 Feb
          </h2>
          <h2 className="items-center flex">
            <i className="mr-2">
              <Image src={locationIcon} alt="locationIcon"  />
            </i>{" "}
            Happening Online
          </h2>
        </div>

        {/* call-to-actions buttons */}
        <div className="flex md:flex-col items-center mt-8 gap-4 md:justify-center md:gap-4">
          <div
            className="apply-button"
            data-hackathon-slug="CROSSKNOT HACKS"
            data-button-theme="light"
          ></div>
          <Link href="https://discord.gg/ScREataGaY"><a><button className="h-12 px-4 py-2 text-white bg-primary rounded-md">Join Discord</button></a></Link>
        </div>
      </div>

      {/* right side section of the landing page */}
      <div className="flex flex-col place-content-center items-center">
            <div className="lg:hidden w-quarter_past"><Image src={landingPageImage} alt="landing page illustration" /></div>
            {/* Timer for the hackathon to be kicked off */}
            <div className="flex flex-col">
              <p className="text-center m-auto tracking-wide text-primary text-2xl mb-4 mt-8">hackathon kicks off in</p>
              {/* timer here  */}
              <Timer />
            </div>
      </div>
    </section>
  );
}
