import React from "react";
import NavbarContainer from "../global/NavbarContainer";
import { Link } from "react-router-dom";
import Hero from "../pages/teacher/Hero";
import StudentsSection from "../pages/teacher/StudentsSection";

export default function TeacherPageLayout() {
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
    </div>
  );
}
