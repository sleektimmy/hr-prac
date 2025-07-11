
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function page() {
  return (
    <div className="items-center bg-gray-200 container shadow-lg p-20 m-auto justify-center my-5 w-fit flex flex-col rounded-3xl text-center items-center">
        <FaCheckCircle className="text-green-500 animate-pulse text-8xl"/>
        <h1 className="font-bold text-3xl uppercase my-3">thank you  !</h1>
        <p className="line-space-5 leading-8">You have succesfully applied for this role, <br />Kindly check your email for further updates in the future.</p>
  <div className="bg-red-800 p-2 text-white w-fit my-3 rounded-full ">
   <Link href="./" className="flex justify-between "> <IoMdArrowRoundBack className="text-2xl" /> Back to Home </Link>

  </div>
    </div>
  )
}
