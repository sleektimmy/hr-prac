"use client"

import { useContext, useState } from "react"
import { SideContext } from "../providers"
import { MdBookmarks } from "react-icons/md";

export default function SaveButton({title, company}) {

  const { setLikes, updates, setUpdates } = useContext(SideContext)
  const [saves, setSaves] = useState('save')

  const handleSave = () => {
    setSaves(`saved`)
    setLikes(prev => prev + 1)
    setUpdates([...updates, {name:title, company:company}])
  }
  return (
  
    <button className={`text-white bg-gray-600  font-semibold flex gap-2 align-items-center py-2 px-4 ${saves == 'saved' ? 'bg-red-600' : 'hover:bg-red-600'} rounded-full capitalize cursor-pointer mt-4  transition-colors duration-300`}
    onClick={handleSave}>  <MdBookmarks />
        {saves}
    </button>
    

  )
}
