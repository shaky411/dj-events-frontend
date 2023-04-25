import Link from "next/link"

export default function Header() {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center py-5 px-10 bg-slate-400 shadow-lg">
            <div>
                <Link className="text-indigo-500 font-bold text-lg" href='/'>
                    {/* <a>DJ Events</a> */}
                    DJ Events
                </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link className="text-slate-100 hover:text-green-400" href='/events'>
                            {/* <a>Events</a> */}
                            Events
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}