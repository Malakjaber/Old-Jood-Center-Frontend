import StudentCard from "./StudentCard";
import Stack from "@mui/joy/Stack";
import MyPagination from "../MyPagination";

export default function StudentsTable({
  studentsLimit,
  handlePageChange,
  students,
  editable,
  page,
  count,
  handleRemoveStudent,
}) {
  return (
    <div className="flex justify-center">
      {students?.length ? (
        <Stack spacing={8} alignItems={"center"}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10">
            {students.map((student) => (
              <StudentCard
                key={student.st_id}
                student={student}
                editable={editable}
                handleRemoveStudent={handleRemoveStudent}
              />
            ))}
          </div>
          {studentsLimit < count ? (
            <MyPagination
              handlePageChange={handlePageChange}
              limit={studentsLimit}
              count={count}
              page={page}
            />
          ) : null}
        </Stack>
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  );
}
