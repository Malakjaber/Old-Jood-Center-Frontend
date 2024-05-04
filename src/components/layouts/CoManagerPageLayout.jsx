import React from "react";
import NavbarContainer from "../global/NavbarContainer";
import { Link } from "react-router-dom";
import StudentsSection from "../pages/teacher/StudentsSection";
import Hero from "../pages/co-manager/Hero";

export default function CoManagerPageLayout() {
  return (
    <div>
      <NavbarContainer title={"Co-Manager"}>
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
      <StudentsSection editable={true} />
    </div>
  );
}
