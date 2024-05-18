import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";

const useGetReports = (st_id, teacher_id, date) => {
  const [reports, setReports] = useState([]);
  const { get, data, error, loading } = useApi();

  useEffect(() => {
    //     if (st_id && teacher_id) {
    get(
      `/reports?st_id=${st_id}&&teacher_id=${teacher_id}&&date=${date.toISOString()}`
    );
    //     }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [st_id, teacher_id, date]);

  useEffect(() => {
    if (data.message === "success") {
      setReports(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return { reports, loading, error };
};

export default useGetReports;
