import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { userServices } from "../../services/user.services";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/types";
import { updateCurrentUser } from "../../redux/user/actions";
import { CurrentUser } from "../../types/user";
import { getObjectDifferences } from "../../utils/compareObjects";
import { defaultValues } from "./constants";
import { CreateUserSchema, CreateUserSchemaType } from "./validation";

const useRegister = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  const { control, handleSubmit } = useForm<CreateUserSchemaType>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: defaultValues(currentUser),
  });
  const comparedRef = useRef<any>(null);

  const { mutate: editUser, isLoading: isEditing } = useMutation(
    userServices.editUser,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSuccess: () => {
        if (Object.keys(comparedRef.current).length === 0 || !currentUser)
          return;
        dispatch(updateCurrentUser(comparedRef.current));
      },
    }
  );

  const onSubmit: SubmitHandler<CreateUserSchemaType> = async (formData) => {
    const compared = getObjectDifferences(defaultValues(currentUser), formData);
    comparedRef.current = compared;
    if (Object.keys(compared).length === 0 || !currentUser) return;
    editUser({ values: formData, documentID: currentUser?.docId });
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    isEditing,
  };
};

export default useRegister;
