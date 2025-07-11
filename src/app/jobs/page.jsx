import JobCard from "../components/JobCard"
import jobs from "../data/jobs";


export default function page() {
  return (
    <div>
    
        <JobCard val={jobs.length}/>
         </div>
  )
}
