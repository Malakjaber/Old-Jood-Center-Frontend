import React, { useState } from "react";
import NavbarContainer from "../global/NavbarContainer";
import { Link } from "react-router-dom";
import Hero from "../pages/teacher/Hero";
import StudentsSection from "../pages/teacher/StudentsSection";
import Calendar from "../global/Calendar";
import ReportSection from "../global/ReportSection";
import TreatmentSection from "../global/TreatmentSection";
import CreateTreatementPlan from "../pages/create-tratement-plan/CreateTreatementPlan";

export default function TeacherPageLayout() {
  const [date, setdate] = useState(null);

  const onCalendarChange = (event) => {
    setdate(event.target.value);
  };
  return (
    <div>
      <NavbarContainer title={"Teacher"}>
        <Link
          className="hover:cursor-pointer text-lg"
          to="#"
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
    </div>
  );
}
