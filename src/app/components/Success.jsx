"use client"
import { useRouter } from "next/navigation";

export default function Success({title}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/success`);
  };

  return (
     <button type="submit" className="w-full bg-red-800 text-white py-2  cursor-pointer rounded hover:bg-red-700 transition duration-200" onClick={handleClick} >Submit Application</button>
   
  );
}
