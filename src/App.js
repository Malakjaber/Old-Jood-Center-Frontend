import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/layouts/HomeLayout";
import ParentPageLayout from "./components/layouts/ParentPageLayout";
import { PrimeReactProvider } from "primereact/api";
import TeacherPageLayout from "./components/layouts/TeacherPageLayout";
import Footer from "./components/global/Footer";
import StudentPageLayout from "./components/layouts/StudentPageLayout";
import CreateReport from "./components/pages/create-report/CreateReport";
import { AuthProvider } from "./components/contexts/AuthContext";
import SignIn from "./components/pages/user/SignIn";
import { QueryClient, QueryClientProvider } from "react-query";
import SignUp from "./components/pages/user/SignUp";
import CreateTreatementPlan from "./components/pages/create-tratement-plan/CreateTreatementPlan";
import CoManagerPageLayout from "./components/layouts/CoManagerPageLayout";
import EditStudentPageLayout from "./components/layouts/EditStudentPageLayout";
import AddNewStudentPage from "./components/layouts/AddNewStudentPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents refetch on window focus
    },
  },
});

function App() {
  return (
    <PrimeReactProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <div className="scroll-smooth flex flex-col justify-between min-h-[100vh]">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomeLayout />} />
                <Route path="/parent" element={<ParentPageLayout />} />
                <Route path="/teacher" element={<TeacherPageLayout />} />
                <Route path="/co_manager" element={<CoManagerPageLayout />} />
                <Route path="/student">
                  <Route path="/student/:id" element={<StudentPageLayout />} />
                  <Route
                    path="/student/:id/edit"
                    element={<EditStudentPageLayout />}
                  />
                  <Route
                    path="/student/createReport/:id"
                    element={<CreateReport />}
                  />
                </Route>
                <Route
                  path="/class/createReport/:id"
                  element={<CreateTreatementPlan />}
                />
                <Route path="/add-student" element={<AddNewStudentPage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </BrowserRouter>
            <Footer />
          </div>
        </AuthProvider>
      </QueryClientProvider>
    </PrimeReactProvider>
  );
}

export default App;
