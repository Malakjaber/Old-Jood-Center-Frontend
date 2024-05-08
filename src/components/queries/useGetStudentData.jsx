import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";

const useGetStudentData = (studentId) => {
  const [studentData, setStudentData] = useState({});
  const { get, data, error, loading } = useApi();

  useEffect(() => {
    if (!studentId) return;
    get(`/students/${studentId}`);
  }, [get, studentId]);

  useEffect(() => {
    if (data.message === "success") {
      setStudentData(data.student);
    }
  }, [data]);

  return { studentData, loading, error };
};

export default useGetStudentData;
