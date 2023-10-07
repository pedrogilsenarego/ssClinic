import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../routes/constants";
import { CurrentUser } from "../types/user";
import checkUserIsAdmin from "../utils/checkUserIsAdmin";

const useAdminAuth = (props: any) => {
  const currentUser: CurrentUser = { username: "poedro", roles: ["admin"] };

  const navigate = useNavigate();
  useEffect(
    () => {
      if (!checkUserIsAdmin(currentUser)) {
        navigate(ROUTE_PATHS.HOME);
      }
    },
    // eslint-disable-next-line
    [currentUser]
  );
  return currentUser;
};

export default useAdminAuth;
