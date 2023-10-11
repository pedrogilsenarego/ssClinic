import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../routes/constants";
import { queryIdentifiers } from "../services/constants";

export const useSignOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onSignOut = useCallback(() => {
    queryClient.setQueryData([queryIdentifiers.USER], null);
    navigate(ROUTE_PATHS.LOGIN);
  }, [navigate, queryClient]);

  return { onSignOut };
};
