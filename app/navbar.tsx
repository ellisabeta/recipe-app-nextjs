import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center">
            <nav>
                <Link href={"/home"}>Home</Link>
            </nav>
        </div>
    )
}
