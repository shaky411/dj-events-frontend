import Layout from "@/components/Layout"
import EventItem from "@/components/EventItem"
import { API_URL } from '@/config/index'
import Link from "next/link"
// import { NEXT_URL } from "@/config/index"

export default function Home({events}) {
  return (
    <Layout>
      <h1 className="text-xl font-bold mb-6">Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}


        {events.length > 0 && (
          <Link className="bg-slate-900 text-white px-4 py-2 rounded-md ml-10 hover:bg-green-400 duration-300 shadow" href='/events'>
          View All Events
          </Link>
        )}


    </Layout>
  )
}



export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events`)
  const events = await res.json()

  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  }
}

// const data = await fetch(`${process.env.BASE_FETCH_URL}api/hello`);