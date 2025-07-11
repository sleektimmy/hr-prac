import Button from "@/app/components/Button"
import jobs from "@/app/data/jobs"
export default function JobCategory({params}) {
    const filteredJobs = jobs.filter(job => job.category === params.cat.replace(/-/, ' ') )
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-16">
        {

            filteredJobs.map((job) => (
                <section key={job.id} className="border-4 border-red-800 ">
                 <h1 className="font-bold text-3xl py-4 border-b-4 border-red-800 uppercase border-double bg-red-800 text-white  p-10 ">
          {job.title}
        </h1>
                <p className=" px-4 border-b-4 border-red-800 my-4"><span className="font-bold">Company: </span> {job.company}</p>
                <p className=" px-4 border-b-4 border-red-800 my-4"><span className="font-bold">Category: </span> {job.category}</p>
                <p className=" px-4 border-b-4 border-red-800 my-4"> <span className="font-bold">Location: </span> {job.location}</p>
                <p className=" px-4 "> <span className="font-bold">About: </span> {job.description.slice(0, 200).concat('...')} <Button title={job.title}/></p>
                

            </section>
        ))
    }
    </div>
  )
}
