import { useParams } from "react-router";
import useGetTeacherInfo from "../queries/useGetTeacherInfo";

const getFields = (data) => {
  const fields = [
    { title: "Name:", data: data.username },
    { title: "Id:", data: data.teacher_id },
    { title: "Birth Date:", data: "t.birth_date" },
    { title: "Email:", data: data.email },
    { title: "Phone:", data: "t.phone" },
    { title: "Address:", data: "t.address" },
  ];
  return fields;
};

export default function TeacherInformationPage() {
  const { id } = useParams();

  const { teacher, loading } = useGetTeacherInfo(id);
  console.log(teacher);

  if (loading) {
    return <></>;
  }
  const fields = getFields(teacher);

  return (
    <div className="flex justify-around p-16 min-h-[100vh]">
      <div className="flex flex-col">
        <h1 className="text-4xl font-Itim mb-14">Teacher Information</h1>
        <div className="h-full mr-8">
          {fields.map((field) => {
            return (
              <div
                key={field.title}
                className="flex border-b border-b-lightgray my-5 p-5"
              >
                <p className=" text-gray text-2xl mr-3">{field.title}</p>
                <p className=" text-2xl overflow-hidden">{field.data}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col">
        <img className="max-h-[700px]" src="/assets/teacher.png" alt="" />
      </div>
    </div>
  );
}
