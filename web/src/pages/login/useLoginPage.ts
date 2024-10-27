import { useMutation } from "@tanstack/react-query";
import { getApiClient } from "../../lib/api";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../utils/cookies";
import { COOKIES } from "../../constants/cookies";

type LoginPayload = {
  email: string;
  password: string;
};

export function useLoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const { isPending: isLoadingLogin, mutate: loginMutate } = useMutation({
    mutationFn: (login: LoginPayload) =>
      getApiClient().post("/auth/token", login),
  });

  function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    loginMutate(form, {
      onSuccess({ data }) {
        setCookie(COOKIES.login, data);
        navigate("/");
      },
      onError: () => toast.error("Tentar novamente!"),
    });
  }

  useEffect(() => {
    const authCookie = getCookie(COOKIES.login);

    if (authCookie) {
      navigate("/");
    }
  }, []);

  return { isLoadingLogin, handleSubmit, handleForm, form };
}
