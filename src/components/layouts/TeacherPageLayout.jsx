import React, { useState } from "react";
import NavbarContainer from "../global/NavbarContainer";
import Hero from "../pages/teacher/Hero";
import StudentsSectionContainer from "./StudentsSectionContainer";
import Calendar from "../global/Calendar";
import TreatmentSection from "../global/TreatmentSection";
import CreateTreatementPlan from "../pages/create-tratement-plan/CreateTreatementPlan";
import { Link } from "react-scroll";
import { Stack } from "@mui/material";
import useRoleRedirect from "../hooks/useRoleRedirect";

export default function TeacherPageLayout() {
  const [date, setdate] = useState(null);

  useRoleRedirect(["teacher"]);

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
      <StudentsSectionContainer />
      <Calendar
        onCalendarChange={onCalendarChange}
        image={"teacher-calendar.png"}
        date={date}
      />
      <TreatmentSection date={date} />
      <CreateTreatementPlan />
    </Stack>
  );
}
