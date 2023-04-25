import Link from "next/link"
import Image from "next/image"

export default function EventItem({evt}) {
    return (
        <div>
        <div className="flex flex-col md:flex-row justify-between items-left md:items-center  mx-[20px] p-[13px] shadow-md rounded-lg mb-6">
            <div>
                <Image className="rounded flex-1 m-[10px] mr-20 hover:scale-110 duration-300" src={evt.image ? evt.image : '/images/event-default.png'} width={170} height={100} />
            </div>

            <div>
                <span className="text-sm text-gray-400">
                    {evt.date} at {evt.time}
                </span>
                <h3 className="font-bold">{evt.name}</h3>
            </div>
            <div className="bg-indigo-500 px-4 py-2 rounded text-white mt-6 hover:bg-pink-500 duration-300 cursor-pointer mr-6">
                <Link href={`/events/${evt.slug}`}>
                    Details
                </Link>
            </div>
        </div>
        </div>
    )
}

// img > flex1 / mx-[10px]

// info > flex2