import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-[100px] mb-[40px] text-center">
            <p className="mt-[5px]">
                Copyright &copy; DJ Events 2023
            </p>
            <p className="text-blue-500">
                <Link href='/about'>About this project</Link>
            </p>
            
        </footer>
    )
}