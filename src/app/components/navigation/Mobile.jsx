"use client"

import Link from "next/link"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavData from "./NavData";
import Image from "next/image";

export default function Mobile() {
    const [isOpen, setIsOpen] = useState(false);

    function handleNavToggle() {
        setIsOpen(!isOpen);
    }
    return (
        <>
        <div className="md:hidden flex justify-between items-center bg-red-800 text-slate-50 h-16 px-4">
            <Link href="/" className="text-2xl font-bold"><Image src="/logo.png" alt="HR Platform" width={50} height={50} className="rounded-full bg-white"/></Link>
            <GiHamburgerMenu className="text-3xl cursor-pointer" onClick={handleNavToggle} />
        </div>
        {isOpen && (
            <ul className="flex space-x-2 flex-col md:hidden justify-around items-center text-slate-50 bg-red-800 h-screen font-semibold text-lg capitalize "
            onClick={() => setIsOpen(false)}>
                <NavData />
            </ul>
        )}
        </>
    )
}