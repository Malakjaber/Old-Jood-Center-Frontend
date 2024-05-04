import NavbarContainer from "../global/NavbarContainer";
import Calendar from "../global/Calendar";
import Hero from "../pages/parent/Hero";
import ReportSection from "../global/ReportSection";
import TreatmentSection from "../global/TreatmentSection";
import { Link } from "react-scroll";
import { useState } from "react";

export default function ParentPageLayout() {
  const [selectedDate, setSelectedDate] = useState(null);

  const onCalendarChange = (event) => {
    setSelectedDate(event.targen.value);
  };

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
        onCalendarChange={onCalendarChange}
      />
      <ReportSection />
      <TreatmentSection />
    </div>
  );
}
