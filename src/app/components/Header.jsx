import React from 'react'

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center bg-slate-950/80 p-8 rounded-4xl ">
        <h1 className="uppercase text-white  text-5xl py-8 text-center font-bold"> hr platform</h1>
        <p className="bg-red-800 text-slate-100 p-3 rounded-full uppercase"> helping you source the best jobs</p>
    </header>
  )
}
