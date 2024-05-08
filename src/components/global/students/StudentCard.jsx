import { Link } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function StudentCard({ student, editable }) {
  return (
    <div className="relative">
      {editable && (
        <button>
          <Link to={`/student/${student.st_id}/edit`}>
            <BorderColorIcon
              sx={{
                position: "absolute",
                right: "0",
                top: "0",
                marginTop: "2.5rem",
                marginRight: "1rem",
                fontSize: "2rem",
                color: "#203c4c",
              }}
            />
          </Link>
        </button>
      )}
      <Link
        to={`/student/${student.st_id}`}
        className="w-[17rem] h-full st-card flex flex-col justify-between text-center px-8 py-8 rounded-3xl shadow-lg"
      >
        <img
          className="min-w-[4.5rem] max-w-[4.5rem] self-center"
          src="/assets/user.png"
          alt=""
        />
        <h1 className="mt-5 text-xl font-semibold ">{student.name}</h1>
        {/* <h1 className=" font-semibold">COO</h1> */}
      </Link>
    </div>
  );
}
