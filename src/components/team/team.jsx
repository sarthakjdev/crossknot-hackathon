/**
 *
 * Teams Section Component  of Crossknot hacks hackathon
 *
 */

import SectionHead from "../sectionHeads";
import SectionSubhead from "../sectionSubhead";
import TeamMemberCard from "./teamCard";
import SeeMoreButton from "../seeMoreButton";
import { useRouter } from "next/router";
const depts = [
  "Open Source & Engineering",
  "Media & Outreach",
  "UI/UX Designing",
  "Market & Sponsorship",
  "Volunteers",
];

export default function Teams({ team }) {
  const router = useRouter();
  return (
    <section
      className={`flex flex-col my-24 mt-14 mx-20 sm:mx-6 ${
        router.route === "/"
          ? "bg-primary_extra_light p-10 w-90 rounded-xl"
          : null
      }`}
    >
      <SectionHead sectionName={"Our Team"} />
      <div className="flex flex-col gap-10">
        <div
          className={`flex flex-row-reverse relative sm:flex-col-reverse flex-wrap items-center justify-center m-auto mb-32 gap-32 gap-y-40 mt-12 sm:gap-y-30 sm:mb-24 ${
            router.route === "/" ? "gap-24 mb-36 " : "gap-32"
          }`}
        >
          {team.map((teamMember) => {
            if (
              teamMember.role == "Advisor" ||
              teamMember.role == "Organiser"
            ) {
              return (
                <TeamMemberCard key={teamMember.name} member={teamMember} />
              );
            }
          })}
        </div>
        {router.route === "/team" && (
          <div
            className={`flex flex-row-reverse relative sm:flex-col-reverse flex-wrap items-center justify-center m-auto mb-32 gap-32 gap-y-40 mt-12 sm:gap-y-30 sm:mb-24 ${
              router.route === "/" ? "gap-24 mb-36 " : "gap-32"
            }`}
          >
            {team.map((teamMember) => {
              if (
                teamMember.role !== "Advisor" &&
                teamMember.role !== "Organiser"
              ) {
                return (
                  <TeamMemberCard key={teamMember.name} member={teamMember} />
                );
              }
            })}
          </div>
        )}
      </div>
      {router.route === "/" && (
        <SeeMoreButton url={"/team"} className="mt-40" align={"bottom"} />
      )}
    </section>
  );
}
