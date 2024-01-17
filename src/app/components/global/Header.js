import Link from "next/link"

export default function Header() {
    return (
        <header className="flex w-full justify-between h-[60px] border">
            <div className="left-nav">
                <ul className="flex h-full align-middle">
                    <Link href='/' className="h-full w-full flex items-center border px-3"><li className="text-nowrap">Project Aurora</li></Link>
                    <Link href='/' className="h-full w-full flex items-center border px-3"><li className="text-nowrap">about_me</li></Link>
                    <Link href='/' className="h-full w-full flex items-center border px-3"><li className="text-nowrap">projects</li></Link>
                    <Link href='/' className="h-full w-full flex items-center border px-3"><li className="text-nowrap">contact_me</li></Link>
                </ul>
            </div>
            <div className="right-nav">
                <ul className="flex h-full align-middle">
                    <Link href='/' className="h-full w-full flex items-center border px-3"><li className="text-nowrap">login</li></Link>
                    <Link href='/' className="h-full w-full flex items-center border px-3"><li className="text-nowrap">sign_up</li></Link>
                </ul>
            </div>
        </header>
    )
}