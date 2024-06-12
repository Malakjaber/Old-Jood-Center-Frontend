import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";

export default function useGetStudentTreatments(st_id) {
  const [treatments, setTreatments] = useState({});
  const { get, data, error, loading } = useApi();

  useEffect(() => {
    if (st_id) {
      get(`/treatments/student-treatments?studentId=${st_id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [st_id]);

  useEffect(() => {
    if (data.message === "success") {
      setTreatments(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return { treatments, loading, error };
}
