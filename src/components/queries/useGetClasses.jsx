import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";

const useGetClasses = (classId, isGetDetails) => {
  const [classes, setClasses] = useState([]);
  const { get, data, error, loading } = useApi();

  useEffect(() => {
    if (isGetDetails) {
      get(`/classes/details`);
    } else {
      get(`/classes/${classId ? classId : ""}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId]);

  useEffect(() => {
    if (data.message === "success") {
      setClasses(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return { classes, loading, error };
};

export default useGetClasses;
