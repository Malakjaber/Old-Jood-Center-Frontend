import { Link } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function StudentCard({ editable }) {
  return (
    <div className="relative">
      {editable && (
        <button
          onClick={() => {
            console.log("clicked");
          }}
        >
          <Link to={"/student/3/edit"}>
            <BorderColorIcon
              color=""
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
        to={"/student/3"}
        className="w-full st-card flex flex-col justify-center text-center px-20 py-8 rounded-3xl shadow-lg"
      >
        <img
          className="min-w-[4.5rem] max-w-[4.5rem] self-center"
          src="/assets/user.png"
          alt=""
        />
        <h1 className="mt-3 text-xl font-semibold ">John Peter</h1>
        <h1 className=" font-semibold">COO</h1>
      </Link>
    </div>
  );
}
