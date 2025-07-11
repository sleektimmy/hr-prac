"use client"
import { SideContext } from "@/app/providers"
import { useContext } from "react"

export default function Saves() {

    const {updates, setUpdates, removed, setRemoved, setLikes} = useContext(SideContext)

    const handleRemove = (index) => {
        const updatedList = updates.filter((_, data) => data !== index);
        setRemoved([...removed, updates[index]]);
        setLikes(prev => prev - 1);
        setUpdates(updatedList)
    }
  return (
    <div>

        <h1 className="font-bold uppercase text-right text-2xl px-4 my-3"> total saves: {updates.length}</h1>

        {
            updates.length === 0 ? (
                <div className="flex items-center justify-center h-64">
                    <p className="text-gray-500">No saved updates yet.</p>
            
            </div>
            ):

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
            {updates.map((update, index) => (
                <div key={index} className="px-4 py-16  border-4 border-red-800 rounded-2xl text-center">
                    <h2 className="text-xl font-bold">{update.name}</h2>
                    <p className="text-xl font-bold">{update.company}</p>

                    <div>
                            <button className="ml-4 cursor-pointer bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700 transition capitalize" onClick={() => router.push(`/jobs/${update.name.toLowerCase().replace(/\s+/g, "-")}`)}> read more</button>
                        <button className="ml-4 bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-700 transition capitalize" onClick={() => handleRemove(index)} >remove</button>
                    </div>
            </div>
            ))}
        </div>
        }
            </div>
  )
}
