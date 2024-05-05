import Head from "next/head";
import styles from "../styles/Home.module.css";
import AboutSection from "../src/components/about/about";
import HeroSection from "../src/components/hero/hero";
import ThemesSection from "../src/components/themes/themes";
import TeamsSection from "../src/components/team/team";
import airtableConstants from "../src/constants/airtableConstants";
import airtableBase from "../src/utils/airtable";
import configs from "../src/config/config";

export default function Home({ prizes, guests, team, events, schedule }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>CrossKnot Hacks</title>
        <meta
          name="description"
          content="a 36 hours long hackathon organised by crossknot community"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Hero section */}

        <HeroSection />
        <AboutSection />
        <ThemesSection />
        {/* <GuestsSection guests={guests} /> */}
        {/* <EventSection events={events} /> */}
        <TeamsSection team={team} />
        {/* <ScheduleSection schedule={schedule} /> */}
        {/* <PrizeSection prizes={prizes}/> */}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const prizeData = await airtableBase(airtableConstants.PRIZE_TABLE)
    .select({ maxRecords: 100 })
    .all();
  let prizes = [];
  prizeData.forEach((prize) => {
    prize.fields.prizeDesc = prize.fields.prizeDesc.split("|");
    prizes.push(prize.fields);
  });

  const guestsData = await airtableBase(airtableConstants.JUDGES_TABLE)
    .select({ maxRecords: 100 })
    .all();
  let guests = [];
  guestsData.forEach((guest) => {
    guests.push(guest.fields);
  });

  const teamsData = await airtableBase(airtableConstants.TEAM_TABLE)
    .select({ maxRecords: 100 })
    .all();
  let team = [];
  teamsData.forEach((member) => {
    team.push(member.fields);
  });

  const eventData = await airtableBase(airtableConstants.EVENT_TABLE)
    .select({ maxRecords: 100 })
    .all();
  let events = [];
  eventData.forEach((event) => {
    events.push(event.fields);
  });

  const scheduleData = await airtableBase(airtableConstants.SCHEDULE_TABLE)
    .select({ maxRecords: 100 })
    .all();
  let schedule = [];
  scheduleData.forEach((event) => {
    schedule.push(event.fields);
  });

  // sorting the prize data
  prizes.sort((a, b) => {
    return a.id - b.id;
  });

  // sorting the schedule data
  schedule.sort((a, b) => {
    return Number(a.eventId) - Number(b.eventId);
  });

  // sorting the guests data
  guests.sort((a, b) => {
    return Number(a.id) - Number(b.id);
  });

  return {
    props: {
      prizes: prizes,
      team: team,
      guests: {
        judges: guests,
      },
      events: events,
      schedule: schedule,
    },
    revalidate: configs.REVALIDATE_TIME,
  };
}
