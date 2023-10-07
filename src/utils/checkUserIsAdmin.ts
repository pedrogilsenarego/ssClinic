import { CurrentUser } from "../types/user";

const checkUserIsAdmin = (currentUser: CurrentUser) => {
  if (!currentUser || !Array.isArray(currentUser.roles)) return false;
  const { roles } = currentUser;
  if (roles.includes("admin")) return true;

  return false;
};

export default checkUserIsAdmin;
