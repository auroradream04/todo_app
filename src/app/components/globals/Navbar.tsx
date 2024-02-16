'use client'

export default function Navbar({ setActivePage }: { setActivePage: (isActive: string) => void }) {
    return (
        <ul className="w-full h-16 border border-white flex">
            <li onClick={() => setActivePage('profile')} className="h-full border border-white flex items-center justify-center py-2 px-3 border-collapse cursor-pointer hover:bg-accent">
                <h2>project_aurora</h2>
            </li>
            <li onClick={() => setActivePage('home')} className="h-full border border-white flex items-center justify-center py-2 px-3 border-collapse cursor-pointer hover:bg-accent">
                <h2>home</h2>
            </li>
            <li onClick={() => setActivePage('to-do-app')} className="h-full border border-white flex items-center justify-center py-2 px-3 border-collapse cursor-pointer hover:bg-accent">
                <h2>to-do-app</h2>
            </li>
        </ul>
    )
}