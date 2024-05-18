import { useEffect, useState } from "react";
import NavbarContainer from "../global/NavbarContainer";
import Hero from "../pages/teacher/Hero";
import StudentsSectionContainer from "./StudentsSectionContainer";
import TreatmentSection from "../global/TreatmentSection";
import CreateTreatementPlan from "../pages/create-tratement-plan/CreateTreatementPlan";
import { Link } from "react-scroll";
import { Stack } from "@mui/material";
import useRoleRedirect from "../hooks/useRoleRedirect";
import useGetTeacherClasses from "../queries/useGetTeacherClasses";
import { useAuth } from "../contexts/AuthContext";
import CalendarContainer from "../pages/teacher/CalendarContainer";
import CustomLoader from "../global/CustomLoader";

export default function TeacherPageLayout() {
  const [date, setdate] = useState(new Date());
  const [treatmentPlan, setTreatmentPlan] = useState({});

  useRoleRedirect(["teacher"]);
  const { user } = useAuth();
  const { classes, loading } = useGetTeacherClasses(user?.userId);

  const onCalendarChange = (event) => {
    setdate(event.target.value);
  };

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <Stack>
      <NavbarContainer title={"Teacher"}>
        <Link
          className="hover:cursor-pointer text-lg"
          to="students"
          spy={true}
          smooth={true}
          duration={500}
        >
          Students
        </Link>
        <Link
          className="hover:cursor-pointer text-lg"
          to="treatment"
          spy={true}
          smooth={true}
          duration={500}
        >
          Create Treatment Plan
        </Link>
      </NavbarContainer>
      <Hero />
      <StudentsSectionContainer />
      {classes[0] ? (
        <CalendarContainer
          date={date}
          onCalendarChange={onCalendarChange}
          classes={classes}
          setTreatmentPlan={setTreatmentPlan}
        />
      ) : (
        ""
      )}
      {treatmentPlan && (
        <TreatmentSection date={date} treatmentPlan={treatmentPlan} />
      )}
      {classes[0] ? <CreateTreatementPlan classes={classes} /> : ""}
    </Stack>
  );
}
