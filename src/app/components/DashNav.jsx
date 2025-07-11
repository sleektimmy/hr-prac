"use client"

import { useContext } from 'react'
import { SideContext } from '../providers'
import Link from 'next/link'

export default function DashNav() {

    const {likes} = useContext(SideContext)
  return (
    <nav>
        <ul className="flex items-center justify-end p-16 space-x-14 bg-gray-100">
            <li>
                <Link href="/dashboard" className="text-lg font-semibold hover:underline"> Dashboard
                </Link>
            </li>
            <li>

                <Link href="/saves" className="text-lg font-semibold hover:underline"> Likes ({likes})
                </Link>
            </li>
        </ul>
    </nav>
  )
}
