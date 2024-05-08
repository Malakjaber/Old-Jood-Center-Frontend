import { Fragment } from "react";
import StudentCard from "./StudentCard";
import Stack from "@mui/joy/Stack";
import MyPagination from "../Pagination";

export default function StudentsTable({
  studentsLimit,
  handlePageChange,
  students,
  editable,
  page,
  count,
}) {
  return (
    <div className="flex justify-center">
      {students?.length ? (
        <Stack spacing={4} alignItems={"center"}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10">
            {students.map((student) => (
              <Fragment key={student.st_id}>
                <StudentCard student={student} editable={editable} />
              </Fragment>
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
