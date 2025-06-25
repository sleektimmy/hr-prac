import JobCard from "../components/JobCard"
import jobs from "../data/jobs";
import Categories from "../components/Categories";

export default function page() {
  return (
    <div>
        <Categories jobs={jobs}/>
        <JobCard val={jobs.length}/>
         </div>
  )
}
