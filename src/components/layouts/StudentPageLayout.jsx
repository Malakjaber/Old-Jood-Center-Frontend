import { Link } from "react-router-dom";
import StudentDataTable from "../pages/student/StudentDataTable";
import { useParams } from "react-router-dom";
import SimpleBackdrop from "../global/Backdrop";
import useGetStudentData from "../queries/useGetStudentData";

export default function StudentPageLayout() {
  const { id } = useParams();
  const { studentData, loading, error } = useGetStudentData(id);

  if (loading) {
    return <SimpleBackdrop open={true} />;
  }

  return (
    <div className="flex justify-around p-16">
      <div className="flex flex-col">
        <h1 className="text-4xl font-Itim mb-14">Student Information</h1>
        <StudentDataTable studentData={studentData} />
      </div>
      <div className="flex flex-col">
        <img
          className="max-h-[700px]"
          src="/assets/student/student.png"
          alt=""
        />
        <Link
          className="font-Itim text-xl mt-5 w-fit self-center rounded-xl bg-blue text-white hover:bg-white transition hover:text-blue border hover:border-blue py-2 px-5"
          to={{
            pathname: `/student/createReport/${studentData.st_id}/${studentData.name}`,
            state: { studentName: studentData.name },
          }}
        >
          Create Report
        </Link>
      </div>
    </div>
  );
}
