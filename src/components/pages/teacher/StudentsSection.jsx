import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import SectionNav from "../../global/SectionNav";
import StudentsTable from "../../global/students/StudentsTable";
import useGetStudents from "../../queries/useGetStudents";
import DebouncedInput from "../../global/DebouncedInput";
import { useState } from "react";
import { CircularProgress, Sheet } from "@mui/joy";

export default function StudentsSection({ editable }) {
  const studentsLimit = 12;
  const { getRole, user } = useAuth();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { students, count, loading, error } = useGetStudents(
    user?.userId,
    studentsLimit,
    page,
    searchTerm
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div id="students" className="border-t-2 border-t-lightgray pb-8">
      <div className="mb-20">
        <SectionNav title={"Student Table"}>
          <div className="flex items-center relative">
            <img
              className="w-5 absolute ml-2"
              src="/assets/icons/search.png"
              alt=""
            />
            <DebouncedInput
              handleSearch={(value) => {
                setSearchTerm(value);
                setPage(1);
              }}
              placeholder="Search here"
            />
          </div>
          {getRole() === "co_manager" || getRole() === "manager" ? (
            <Link
              to={"/add-student"}
              className="border-2 border-white px-2 py-[0.1rem] rounded-md font-Itim text-lg"
            >
              Add new student
            </Link>
          ) : (
            <></>
          )}
        </SectionNav>
      </div>
      {!loading ? (
        <StudentsTable
          handlePageChange={handlePageChange}
          studentsLimit={studentsLimit}
          students={students}
          editable={editable}
          page={page}
          count={count}
        />
      ) : (
        <Sheet
          sx={{
            width: "100vw",
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size="md" value={20} variant="soft" />
        </Sheet>
      )}
    </div>
  );
}
