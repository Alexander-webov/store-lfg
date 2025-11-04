"use client";

import { actionFunction } from "@/app/utils/type";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const inititalState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, inititalState);
  useEffect(() => {
    if (state.message) {
      toast.info(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
