import React from "react";
import logoWhite from "../../assets/images/logo_white.png";
import { Link, useLocation } from "react-router-dom";
import { ProfileDropdown } from "../../components";

const links = [
  { label: "Agendamentos", link: "/" },
  { label: "Médicos", link: "/medicos" },
  { label: "Serviços", link: "/servicos" },
];

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="w-full bg-primary h-[60px] flex items-center">
      <div className="container flex items-center justify-between">
        <section className="flex items-center gap-16">
          <img src={logoWhite} alt="Agendei" />
          <section className="flex items-center gap-6 text-white">
            {React.Children.toArray(
              links.map((link) => (
                <Link
                  className={pathname === link.link ? "font-bold" : ""}
                  to={link.link}
                >
                  {link.label}
                </Link>
              ))
            )}
          </section>
        </section>
        <ProfileDropdown name="Ernesto Júnior" />
      </div>
    </header>
  );
}
