import Link from "next/link";
export default function Categories({jobs}) {
    const categories = [ ...new Set(jobs.map(job => job.category)) ];
  return (
    <nav>
        <ul className="flex justify-around items-center bg-gray-100 p-4 space-around m-4 wrap md:flex-wrap scroll-x">
    {categories.map((category, index) => (
        <li key={index} className="inline-block mr-4 hover:bg-red-800 hover:text-white hover:text-xl p-2 rounded transition-all duration-300">
            <Link href={`/jobs?category=${category}`}>
            {category}
            </Link>
        </li>
    ))}
</ul>
        
        </nav>
  )
}
