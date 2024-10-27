import { useMutation } from "@tanstack/react-query";
import { getApiClient } from "../../lib/api";
import React, { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type CreateAccountPayload = {
  name: string;
  email: string;
  password: string;
};

export function useAccountPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const { isPending: isLoadingCreateAccount, mutate: createAccountMutate } =
    useMutation({
      mutationFn: (account: CreateAccountPayload) =>
        getApiClient().post("/users", account),
    });

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    createAccountMutate(form, {
      onSuccess: () => {
        toast.success("Cadastro efetuado com sucesso!");
        navigate("/login");
      },
      onError: () => toast.error("Tentar novamente!"),
    });
  }

  return { isLoadingCreateAccount, handleSubmit, handleForm, form };
}
