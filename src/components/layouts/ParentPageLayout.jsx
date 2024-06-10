import NavbarContainer from "../global/NavbarContainer";
import Calendar from "../global/Calendar";
import Hero from "../pages/parent/Hero";
import ReportSection from "../global/ReportSection";
import TreatmentSection from "../global/TreatmentSection";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import useRoleRedirect from "../hooks/useRoleRedirect";
import useGetReports from "../queries/useGetReports";
import useGetStudentByParent from "../queries/useGetStudentByParent";
import { useAuth } from "../contexts/AuthContext";
import { CircularProgress, Sheet } from "@mui/joy";

export default function ParentPageLayout() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useRoleRedirect(["parent"]);
  const { user } = useAuth();

  const { student } = useGetStudentByParent(user?.userId);

  const { reports, loading } = useGetReports(
    student?.st_id,
    null,
    selectedDate
  );

  const onCalendarChange = (event) => {
    setSelectedDate(event.target.value);
  };

  useEffect(() => {
    console.log(reports);
  }, [reports]);

  return (
    <div>
      <NavbarContainer title={"Parent"}>
        <Link
          className="hover:cursor-pointer"
          to="calendar"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img className="w-8" src="/assets/icons/calendar.svg" alt="" />
        </Link>
        <Link
          className="hover:cursor-pointer text-lg"
          to="report"
          spy={true}
          smooth={true}
          duration={500}
        >
          View Report
        </Link>
        <Link
          className="hover:cursor-pointer text-lg"
          to="treatment"
          spy={true}
          smooth={true}
          duration={500}
        >
          Read Treatment Plans
        </Link>
      </NavbarContainer>
      <Hero />
      <Calendar
        image={"calendar-image.png"}
        date={selectedDate}
        onCalendarChange={onCalendarChange}
      />
      {!loading ? (
        reports.length && reports[0] ? (
          <ReportSection
            teacherName={reports[0].teacherName}
            studentName={student.name}
            report={reports[0]}
          />
        ) : null
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
      <TreatmentSection />
    </div>
  );
}
