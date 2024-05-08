import React, { useState } from "react";
import NavbarContainer from "../global/NavbarContainer";
// import { Link } from "react-router-dom";
import Hero from "../pages/teacher/Hero";
import StudentsSection from "../pages/teacher/StudentsSection";
import Calendar from "../global/Calendar";
import ReportSection from "../global/ReportSection";
import TreatmentSection from "../global/TreatmentSection";
import CreateTreatementPlan from "../pages/create-tratement-plan/CreateTreatementPlan";
import { Link } from "react-scroll";
import { Stack } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import useRoleRedirect from "../hooks/useRoleRedirect";

export default function TeacherPageLayout() {
  const [date, setdate] = useState(null);
  const { user } = useAuth();

  useRoleRedirect(user?.role, ["teacher"]);

  const onCalendarChange = (event) => {
    setdate(event.target.value);
  };

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
      </NavbarContainer>
      <Hero />
      <StudentsSection />
      <Calendar
        onCalendarChange={onCalendarChange}
        image={"teacher-calendar.png"}
      />
      <ReportSection date={date} />
      <TreatmentSection date={date} />
      <CreateTreatementPlan />
    </Stack>
  );
}
