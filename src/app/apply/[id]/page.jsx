
export default async function JobApplication({params}) {
  const { id } = await params;
  return (
    <div>
        <h1 className="text-3xl font-bold text-center my-8">Job Application</h1>
        <p className="text-center text-gray-600 mb-4">
            Please fill out the form below to apply for the job.
        </p>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Job Title</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded" value={id.replaceAll('-',' ').toUpperCase()} disabled />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="resume">Resume (PDF)</label>
                <input type="file" id="resume" name="resume" accept=".pdf" required className="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="coverLetter">Cover Letter</label>
                <textarea id="coverLetter" name="coverLetter" rows="4" placeholder="Write a Cover Letter (Make it Professional & Brief)" required className="w-full px-3 py-2 border border-gray-300 rounded"></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="coverLetter">Cover Letter</label>
                <input type="file" id="coverLetter" name="coverLetter" accept=".pdf" required className="w-full px-3 py-2 border border-gray-300 rounded" />
            </div>
            <button type="submit" className="w-full bg-red-800 text-white py-2  cursor-pointer rounded hover:bg-red-700 transition duration-200">Submit Application</button>
    </form>
    </div>
)
}
