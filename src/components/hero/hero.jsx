import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";
import calendarIcon from "../../../public/images/calendar.svg";
import locationIcon from "../../../public/images/location.svg";
import landingPageImage from "../../../public/images/hero/landingImage.svg";
import Timer from '../timer'
import headingImage from "../../../public/images/hero/heading.svg"
import bgPattern from "../../../public/images/hero/bgPattern.svg"


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
    <section className="flex items-center justify-evenly lg:flex-col text-hero_section_text font-primary">
      <div className="flex flex-col justify-evenly items-center">

        {/* illustration for smaller screens */}
      <div className="hidden  w-quarter_past"><Image src={landingPageImage} alt="landing page illustration" /></div>

        {/* crossknot hacks heading */}
        <div className="relative flex  justify-center items-center lg:w-70">
          <Image src={headingImage} alt="crossknot heading" />
        </div>

        {/* time and place of the hackathon */}
        <div className="flex flex-col mt-6">
          <h2 className="items-center flex">
            <i className="mr-2">
              <Image src={calendarIcon} alt="calendarIcon" />
            </i>
            16th - 17th April 2022
          </h2>
          <h2 className="items-center flex">
            <i className="mr-4">
              <Image src={locationIcon} alt="locationIcon"  />
            </i>
            Happening Online
          </h2>
        </div>

        {/* call-to-actions buttons */}
        <div className="flex md:flex-col items-center mt-8 gap-4 md:justify-center md:gap-4 md:mt-4">
          <div
            className="apply-button"
            data-hackathon-slug="crossknothacks"
            data-button-theme="dark"
          ></div>
          <Link href="https://discord.gg/ScREataGaY"><a><button className="flex items-center justify-around h-12 px-6 py-2 text-white bg-primary rounded-md border-primary border-2 hover:text-primary hover:bg-white transition-all duration-150">Join Our Discord</button></a></Link>
        </div>
      </div>

      {/* right side section of the landing page */}
      <div className="flex flex-col place-content-center items-center">
            <div className="lg:hidden w-70"><Image src={landingPageImage} alt="landing page illustration" /></div>
            {/* Timer for the hackathon to be kicked off */}
            <div className="flex flex-col">
              <p className="text-center m-auto tracking-wide text-primary text-2xl mb-4 lg:mt-8 sm:mt-4">hackathon kicks off in</p>
              <Timer />
            </div>
      </div>
    </section>
  );
}
