import { useState, useEffect } from "react";
import useApi from "../hooks/useApi"; // Adjust the path as needed to where useApi is located

export default function useGetStudents(userId, limit = 12, page, searchTerm) {
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);

  const { get, data, loading, error } = useApi();

  useEffect(() => {
    if (userId) {
      get(
        `/students/teacher/${userId}?limit=${limit}&page=${page}&search=${searchTerm}`
      );
    }
  }, [userId, page, searchTerm, get, limit]);

  useEffect(() => {
    console.log("data", data);
    if (data?.message === "success") {
      setStudents(data.students);
      setCount(data.count);
    }
  }, [data]);

  return {
    students,
    count,
    loading,
    error,
  };
}
