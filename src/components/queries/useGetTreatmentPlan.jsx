import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";

export default function useGetTreatmentPlan(classId, teacher_id, date) {
  const [treatment, setTreatment] = useState({});
  const { get, data, error, loading } = useApi();

  useEffect(() => {
    if (classId) {
      get(
        `/treatments?classId=${classId}${
          teacher_id ? `&teacher_id=${teacher_id}` : ""
        }${date ? `&date=${date.toISOString()}` : ""}`
      );
    }
  }, [classId, teacher_id, date, get]);

  useEffect(() => {
    if (data.message === "success") {
      setTreatment(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return { treatment, loading, error };
}
