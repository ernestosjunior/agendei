import bg from "../../assets/images/bg_auth.png";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Button, Input } from "../../components";
import { useLoginPage } from "./useLoginPage";

export function Login() {
  const { form, handleForm, handleSubmit, isLoadingLogin } = useLoginPage();

  return (
    <main className="flex flex-col-reverse lg:flex-row justify-between max-h-screen">
      <section className=" gap-[4vh] lg:gap-0 w-full flex flex-col items-center justify-between py-10 px-4">
        <div className="flex flex-col justify-center items-center text-center">
          <img src={logo} alt="Agendei" />
          <h1 className="font-bold font-poppins text-xl lg:text-2xl mt-9">
            Gerencie seus agendamentos <br /> de forma descomplicada.
          </h1>
        </div>
        <form
          className="w-full max-w-[348px] flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <h2 className="font-poppins text-xl lg:text-2xl mb-2 text-center">
            Acesse sua conta
          </h2>
          <Input
            placeholder="E-mail"
            name="email"
            onChange={handleForm}
            value={form.email}
          />
          <Input
            placeholder="Senha"
            name="password"
            onChange={handleForm}
            value={form.password}
          />
          <Button disabled={isLoadingLogin} loading={isLoadingLogin}>
            Acessar
          </Button>
        </form>
        <div>
          Não tenho conta.{" "}
          <Link className="text-primary font-semibold" to="/cadastro">
            Criar conta agora.
          </Link>
        </div>
      </section>
      <section className="w-full h-full overflow-hidden">
        <img
          src={bg}
          alt="Agendei"
          className="overflow-hidden w-full h-[35vh] lg:h-screen object-cover object-top"
        />
      </section>
    </main>
  );
}
