import Link from "next/link";
import SearchIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import CartIcon from '@heroicons/react/24/solid/ShoppingBagIcon'
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import SearchDialog from "./SearchDialog";
import { useState } from "react";


export default function Navbar() {
    const [openSearch, setOpenSearch] = useState(false)


    return (
        <>
            <nav className="sticky top-0 inset-y-0 border-b shadow-sm bg-white z-40">
                <div className="flex justify-between items-center py-3 content">
                    <Link href="/" className="text-2xl font-bold">PHONE</Link>
                    <ul className="flex gap-5 p-2 text-zinc-600">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#">Categories</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>

                    <div className="flex gap-4 items-center">
                        <Link href="#" className="border rounded-full p-1">
                            <UserIcon className="w-6 aspect-square text-zinc-700" />
                        </Link>
                        <button className="border rounded-full p-1" onClick={() => setOpenSearch(true)}>
                            <SearchIcon className="w-6 aspect-square text-zinc-700" />
                        </button>
                        <Link href="/cart" className="border rounded-full p-1">
                            <CartIcon className="w-6 aspect-square text-zinc-700" />
                        </Link>
                    </div>
                </div>
            </nav>
            <SearchDialog open={openSearch} onClose={() => setOpenSearch(false)} />
        </>
    )
}
