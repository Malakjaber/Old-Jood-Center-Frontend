import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import SectionNav from "../../global/SectionNav";
import StudentsTable from "../../global/students/StudentsTable";

export default function StudentsSection({ editable }) {
  const { user } = useAuth();
  return (
    <div className="border-t-2 border-t-lightgray pb-8">
      <div className="mb-20">
        <SectionNav title={"Student Table"}>
          <div className="flex items-center relative">
            <img
              className="w-5 absolute ml-2"
              src="/assets/icons/search.png"
              alt=""
            />
            <input
              className="h-8 pl-9 outline-none rounded-md shadow-md"
              type="text"
              name="st-search"
            />
          </div>
          {user.role === "co_manager" || user.role === "manager" ? (
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
      <StudentsTable editable={editable} />
    </div>
  );
}
