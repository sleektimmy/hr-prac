import Header from "./components/Header";
import back from "./components/home.module.css"
import JobCategory from "./components/JobCategory";

export default function Home() {
  return (
    <>
    <div className={back.bg}>
     <Header />
    </div>
    <JobCategory />
  </>
  )
}