import Layout from "@/components/Layout"
import { API_URL } from "@/config"
import Link from "next/link"
import Image from "next/image"
import {FaPencilAlt, FaTimes} from 'react-icons/fa'

export default function EventPage({evt}) {

    const deleteEvent = (e) => {
        console.log('delete')
    }

    return (
        <Layout>
            {/* <h1 className="text-xl font-bold">{evt.name}</h1> */}
            <div className="relative pt-[40px]">
                <div className="flex items-center justify-center absolute right-[30px] top-0">
                    <Link className="flex items-center" href={`/events/edit/${evt.id}`}>
                    <FaPencilAlt className="mr-1" /> Edit Event
                    </Link>
                    <a href="#" className="flex items-center ml-[20px] text-red-500" onClick={deleteEvent}><FaTimes className="mr-1" />Delete Event</a>
                </div>

                <span className="text-sm text-gray-400">
                    {evt.date} at {evt.time}
                </span>
                <h1 className="mb-4 font-bold text-lg">{evt.name}</h1>
                {evt.image && (
                    <div className="mb-[20px]">
                    <Image className="rounded-lg shadow-lg" src={evt.image} width={960} height={600} />
                </div>
                )}
                
                <h3 className="text-lg font-bold mb-1">Performers:</h3>
                <p className="mb-2">{evt.performers}</p>
                <h3 className="text-lg font-bold mb-1">Description:</h3>
                <p className="mb-2">{evt.description}</p>
                <h3 className="text-lg font-bold mb-2">Venue: {evt.venue}</h3>
                <p className="mb-6">{evt.address}</p>

                <Link className="text-blue-500 font-bold" href='/events'>
                    {'<'} Go Back
                </Link>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()

    const paths = events.map(evt => ({
        params: {slug: evt.slug}
    }))

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params: {slug}}) {
    
        const res = await fetch(`${API_URL}/api/events/${slug}`)
        const events = await res.json()
    
        return {
            props: {
                evt: events[0]
            },
            revalidate: 1
        }
    }

// export async function getServerSideProps({query: {slug}}) {
    
//     const res = await fetch(`${API_URL}/api/events/${slug}`)
//     const events = await res.json()

//     return {
//         props: {
//             evt: events[0]
//         },
//     }
// }



// Styles

// Event - position-relative pt-[40px]

// event h3 - font-size-[25px]

// event p - mx-[10px]

// image - mb-[20px]

// controls - position-absolute / right-[30px] top-[0]

// delete ml-[20px] text-red-500

// back - display-block / mt-[40px]