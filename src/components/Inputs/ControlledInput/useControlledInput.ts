import { Control, UseFormSetValue, get, useController } from "react-hook-form";

type Props = {
  name: string;
  control?: Control<any, any>;
  setValue?: UseFormSetValue<any>;
};

const useControlledInput = ({ name, control, setValue }: Props) => {
  const {
    field,
    formState: { isSubmitting, errors },
  } = useController({
    name,
    control,
  });
  const error = get(errors, name, "");
  const hasError = Boolean(error?.message);

  return { hasError, field, isSubmitting };
};

export default useControlledInput;
