import jobs from "../data/jobs"
import { MdHomeWork } from "react-icons/md";


export default function JobCard(props) {
    const jobList = jobs.map((job) => (
        <article key={job.id} className="job-card text-center">
            <p className="text-white w-fit p-2 bg-red-800 rounded-r-2xl">
              <MdHomeWork className="inline-block mr-2 text-2xl" />
              <span>{job.company}</span>


            </p>
            <h2 className="text-bold uppercase text-2xl font-bold ">{job.title}</h2>
            <p>{job.category}</p>
            <p>{job.location}</p>
        </article>
    ))
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[...jobList].sort(()=>0.5-Math.random()).slice(0, props.val)}
    </div>
  )
}
