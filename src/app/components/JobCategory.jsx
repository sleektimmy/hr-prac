import JobCard from "./JobCard"



export default function JobCategory() {
  return (
    <section className="md:py-16 md:px-8 py-4 px-4">
      <h2 className="md:text-3xl text-lg font-bold uppercase text-center text-red-800 py-5 border-b-5"> Top Jobs Available</h2>
      <div className="md:py-16 md:px-8 py-4 px-4">
        <JobCard val='6'/>
    </div>
    </section>
  )
}
