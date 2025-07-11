import jobs from "@/app/data/jobs";
import Image from "next/image";
import Link from "next/link";
import { SiListmonk } from "react-icons/si";

export default function JobDescription({ params }) {
  const jobDetails = jobs.find(
    (job) => job.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  const relatedJobs = jobs.filter(job => (job.category === jobDetails.category && job.title.toLowerCase().replace(/\s+/g, "-") !== params.slug) || (job.location === jobDetails.location && job.title.toLowerCase().replace(/\s+/g, "-") !== params.slug)).sort(() => 0.5 - Math.random()).slice(0, 3);
  return (
    <div className="flex flex-col items-center justify-center p-4 w-4/5 m-auto">
      <Image
        src={`/${jobDetails.id !== null ? jobDetails.id : "hire"}.jpg`}
        alt={jobDetails.title}
        width={500}
        height={300}
        className="rounded-full"
      />
      <div className="flex justify-center items-center w-full">
        <h1 className="font-bold text-5xl py-4 border-b-4 uppercase border-double my-5 ">
          {jobDetails.title}
        </h1>
        <p
          className={`font-semibold  text-white py-2 px-4 rounded-full ${
            Math.ceil(
              (new Date(jobDetails.endDate) - new Date()) /
                (1000 * 60 * 60 * 24)
            ) < 4
              ? "bg-red-500 animate-pulse"
              : "bg-red-800"
          }`}
        >
          Days Left:{" "}
          {Math.ceil(
            (new Date(jobDetails.endDate) - new Date()) / (1000 * 60 * 60 * 24)
          )}{" "}
          days
        </p>
      </div>
      <h2>Company Name: {jobDetails.company}</h2>
      <h2>Category: {jobDetails.category}</h2>
      <h2>Location: {jobDetails.location}</h2>
      <p>
        Closing Date:{" "}
        {new Date(jobDetails.endDate).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <section>
        <h2 className="font-semibold text-3xl capitalize my-4 ">
          Job Description
        </h2>
        <p className="text-justify py-4">{jobDetails.description}</p>
      </section>
<section className="w-full">
  <h2 className="font-semibold text-3xl capitalize mb-4">Job Requirements</h2>
  <ul className="list-none space-y-2">
    {jobDetails.requirements.map((requirement, index) => (
      <li key={index} className="flex items-start gap-2">
        <SiListmonk className="mt-1 text-red-800" />
        <span>{requirement}</span>
      </li>
    ))}
  </ul>
</section>
<div className="w-full flex justify-start mt-4">

      <Link
        href={`/apply/${jobDetails.title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <input
          type="button"
          value="Apply Now"
          className="bg-red-800 text-white font-semibold py-2 px-4 rounded-full  cursor-pointer mt-4 hover:bg-red-600 transition-colors duration-300"
        />
      </Link>
</div>

      

        <section className="w-full mt-8">
          <h2 className="font-semibold text-3xl capitalize ">Related Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
            relatedJobs.map((job) => (
              <div
                key={job.id}
                className=" p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-600">Company: {job.company}</p>
                <p className="text-gray-600">Location: {job.location}</p>
                <Link
                  href={`/jobs/${job.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-red-800 hover:underline"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
          </div>
        )
    }