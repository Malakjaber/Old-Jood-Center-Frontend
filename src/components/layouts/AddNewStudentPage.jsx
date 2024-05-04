import StudentDetailsForm from "../global/StudentDetailsForm";

export default function AddNewStudentPage() {
  return (
    <div className="flex justify-around p-16">
      <div className="flex flex-col min-w-[25rem]">
        <h1 className="text-4xl font-Itim mb-14 ">Add new student</h1>
        <StudentDetailsForm onSubmit={(values) => console.log(values)} />
      </div>
      <div className="flex flex-col">
        <img
          className="max-h-[700px]"
          src="/assets/student/student.png"
          alt=""
        />
      </div>
    </div>
  );
}
