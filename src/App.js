import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/layouts/HomeLayout";
import ParentPageLayout from "./components/layouts/ParentPageLayout";
import { PrimeReactProvider } from "primereact/api";
import TeacherPageLayout from "./components/layouts/TeacherPageLayout";
import Footer from "./components/global/Footer";
import StudentPageLayout from "./components/layouts/StudentPageLayout";

function App() {
  return (
    <PrimeReactProvider>
      <div className="scroll-smooth flex flex-col justify-between min-h-[100vh]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/parent" element={<ParentPageLayout />} />
            <Route path="/teacher" element={<TeacherPageLayout />} />
            <Route path="/student/:id" element={<StudentPageLayout />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
