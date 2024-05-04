import { Link } from "react-router-dom";
import StudentDataTable from "../pages/student/StudentDataTable";

export default function StudentPageLayout() {


  return (
    <div className="flex justify-around p-16">
      <div className="flex flex-col">
        <h1 className="text-4xl font-Itim mb-14">Student Information</h1>
        <StudentDataTable />
      </div>
      <div className="flex flex-col">
        <img
          className="max-h-[700px]"
          src="/assets/student/student.png"
          alt=""
        />
        <Link
          className="font-Itim text-xl mt-5 w-fit self-center rounded-xl bg-blue text-white hover:bg-white transition hover:text-blue border hover:border-blue py-2 px-5"
          to={"/student/createReport/:id"}
        >
          Create Report
        </Link>
      </div>
    </div>
  );
}
