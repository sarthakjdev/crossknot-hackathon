import Head from "next/head";
import TeamSection from "../src/components/team/team";
import configs from "../src/config/config";
import airtableConstants from "../src/constants/airtableConstants";
import airtableBase from "../src/utils/airtable";

export default function Team({ team }) {
  return (
    <>
      <Head>
        <title>Team | CrossKnot Hacks</title>
      </Head>
      <TeamSection team={team} />
    </>
  );
}

export async function getStaticProps() {
  const data = await airtableBase(airtableConstants.TEAM_TABLE)
    .select({ maxRecords: 100 })
    .all();
  let team = [];
  data.forEach((member) => {
    team.push(member.fields);
  });
  return {
    props: {
      team: team,
    },
    revalidate: configs.REVALIDATE_TIME,
  };
}
