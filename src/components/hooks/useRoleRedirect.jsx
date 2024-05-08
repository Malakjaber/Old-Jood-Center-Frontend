import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const redirectMap = {
  co_manager: "/co_manager",
  manager: "/manager",
  parent: "/parent",
};

const useRoleRedirect = (userRole, targetRoles) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!targetRoles.find((role) => role === userRole)) {
      const redirectPath = redirectMap[userRole] || "/signin";
      navigate(redirectPath);
    }
  }, [userRole, targetRoles, navigate]);
};

export default useRoleRedirect;
