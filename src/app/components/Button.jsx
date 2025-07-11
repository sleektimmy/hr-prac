"use client"
import { useRouter } from "next/navigation";

export default function Button({title}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/jobs/${title.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <button className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-600 capitalize m-4 cursor-pointer transition duration-300"
    onClick={handleClick}>
      Read more
    </button>
  );
}
