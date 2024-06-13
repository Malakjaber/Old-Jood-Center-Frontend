import NavbarContainer from "../global/NavbarContainer";
import Hero from "../pages/parent/Hero";
import TreatmentSection from "../global/TreatmentSection";
import { Link } from "react-scroll";
import useRoleRedirect from "../hooks/useRoleRedirect";
import useGetReports from "../queries/useGetReports";
import useGetStudentByParent from "../queries/useGetStudentByParent";
import { useAuth } from "../contexts/AuthContext";
import { CircularProgress, Sheet } from "@mui/joy";
import DocsTable from "../global/DocsTable";
import SectionNav from "../global/SectionNav";
import useGetStudentTreatments from "../queries/useGetStudentTreatments";
import { useEffect } from "react";

const reportsHeadCells = [
  {
    id: "id",
    label: "Id",
  },
  {
    id: "teacherName",
    label: "Teacher",
  },
  {
    id: "date",
    label: "Date",
  },
  {
    id: "content",
    label: "Content",
  },
];
const treatmentsHeadCells = [
  {
    id: "id",
    label: "Id",
  },
  {
    id: "teacherName",
    label: "Teacher",
  },
  {
    id: "className",
    label: "Class",
  },
  {
    id: "date",
    label: "Date",
  },
  {
    id: "content",
    label: "Content",
  },
];

export default function ParentPageLayout() {
  useRoleRedirect(["parent"]);
  const { user } = useAuth();

  const { student } = useGetStudentByParent(user?.userId);

  const { reports, loading: reportsLoading } = useGetReports(
    student?.st_id,
    null
  );

  const { treatments, loading: treatmentsLoading } = useGetStudentTreatments(
    student?.st_id
  );

  return (
    <div>
      <NavbarContainer title={"Parent"}>
        {/* <Link
          className="hover:cursor-pointer"
          to="calendar"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img className="w-8" src="/assets/icons/calendar.svg" alt="" />
        </Link> */}
        <Link
          className="hover:cursor-pointer text-lg"
          to="reports"
          spy={true}
          smooth={true}
          duration={500}
        >
          Reports
        </Link>
        <Link
          className="hover:cursor-pointer text-lg"
          to="treatments"
          spy={true}
          smooth={true}
          duration={500}
        >
          Treatment Plans
        </Link>
      </NavbarContainer>
      <Hero />
      <hr className="border-t-2 border-t-lightgray" />
      <SectionNav id="reports" title={"Reports"} />

      {!reportsLoading ? (
        <div className="min-h-[50vh] flex justify-center items-center">
          <DocsTable
            rows={reports}
            headCells={reportsHeadCells}
            cellLinkTo={"report"}
            emptyMsg={"No Reports Found!"}
          />
        </div>
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
          <CircularProgress variant="solid" color="neutral" />
        </Sheet>
      )}
      <SectionNav title={"Treatments"} id="treatments" />
      {!treatmentsLoading ? (
        <div className="min-h-[50vh] flex justify-center items-center">
          <DocsTable
            rows={treatments}
            emptyMsg={"No Treatments Found!"}
            headCells={treatmentsHeadCells}
            cellLinkTo={"treatment"}
          />
        </div>
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
          <CircularProgress variant="solid" color="neutral" />
        </Sheet>
      )}
    </div>
  );
}
