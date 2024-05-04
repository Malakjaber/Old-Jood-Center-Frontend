import StudentCard from "./StudentCard";

export default function StudentsTable({ editable }) {
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.apply(null, Array(16)).map((student) => {
          return <StudentCard editable={editable} />;
        })}
      </div>
    </div>
  );
}
