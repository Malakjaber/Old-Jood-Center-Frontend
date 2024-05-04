import SectionNav from "../../global/SectionNav";
import StudentsTable from "../../global/students/StudentsTable";

export default function StudentsSection({ editable }) {
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
        </SectionNav>
      </div>
      <StudentsTable editable={editable} />
    </div>
  );
}
