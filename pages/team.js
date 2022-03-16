import Head from 'next/head'
import TeamSection from "../src/components/team/team"
import airtableBase from '../src/utils/airtable'

export default function Team({team}){
    return(
            <>
            <Head>
            <title>Team | CrossKnot Hacks</title>
            </Head>
            <TeamSection team={team} />
            </>
    )
}

export async function getStaticProps(){

    const data = await airtableBase('Team').select({maxRecords: 100,}).all()
    let team = [];
    data.forEach(member => {
        team.push(member.fields)
    });
    return {
        props: {
            team: team
        },
        revalidate: 3600,
    }
}