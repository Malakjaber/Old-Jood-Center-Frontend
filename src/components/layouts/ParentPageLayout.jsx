import NavbarContainer from "../global/NavbarContainer";
import Calendar from "../pages/parent/Calendar";
import Hero from "../pages/parent/Hero";
import ReportSection from "../pages/parent/ReportSection";
import TreatmentSection from "../pages/parent/TreatmentSection";
import { Link } from "react-scroll";

export default function ParentPageLayout() {
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
      <Calendar />
      <ReportSection />
      <TreatmentSection />
    </div>
  );
}
