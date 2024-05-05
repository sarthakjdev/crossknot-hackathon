import SectionHead from "../sectionHeads";
import Image from "next/image";
import aboutImage from "../../../public/images/about.svg";

export default function About() {
  return (
    <section className="flex flex-col my-8 mx-14 sm:mx-2 bg-primary_extra_light  rounded-2xl p-10">
      <SectionHead sectionName={"About Us"} />
      <div className="relative flex"></div>
      <div className="flex  items-center justify-evenly m-auto gap-6 lg:flex-col-reverse mt-6">
        <div className="w-quarter_past mr-14 lg:m-auto">
          <p className="leading-loose font-primary text-xl text-card_text lg:text-center m-auto">
            🎀 A hacker is always creating something new. They put in long
            hours, try a hundred different solutions and ideas, and even fail a
            few times before getting the best result. But, never stop learning
            new things. And the goal of a hackathon is to work together,
            collaborate and build innovative things.{" "}
          </p>
          <p className="leading-loose font-primary text-xl text-card_text lg:text-center m-auto">
            CrossKnot is conducting a hackathon with that spirit - CrossKnot
            Hacks and inviting all developers and hackathon enthusiasts to
            participate in an exciting and engaging hackathon. CrossKnot
            Hackathon aims to encourage young and future developers to leave a
            digital footprint in the IT world.
          </p>
        </div>
        <div className="max-w-s lg:w-half">
          <Image src={aboutImage} alt="about illustration" />
        </div>
      </div>
    </section>
  );
}
