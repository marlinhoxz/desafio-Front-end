"use client";

import { useState } from "react";
import s from "./sideBar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

type itemProps = {
  item: string;
  icon: string;
  notification?: boolean;
  desenvolvido: boolean;
  href: string;
};

const navItems: itemProps[] = [
  {
    item: "You Stay",
    icon: "/assets/images/icon-bed.svg",
    notification: true,
    desenvolvido: true,
    href: "/",
  },

  {
    item: "The house",
    icon: "/assets/images/icon-house.svg",
    notification: false,
    desenvolvido: false,
    href: "/house",
  },

  {
    item: "Around town",
    icon: "/assets/images/icon-pin.svg",
    notification: false,
    desenvolvido: false,
    href: "/",
  },

  {
    item: "Breakfast",
    icon: "/assets/images/icon-breakfast-outline.svg",
    notification: false,
    desenvolvido: false,
    href: "/",
  },

  {
    item: "Messages",
    icon: "/assets/images/icon-mail.svg",
    notification: false,
    desenvolvido: false,
    href: "/",
  },
];

export default function SideBar() {
  const pathname = usePathname();
  const [modal, setModal] = useState<string | null>(null);

  return (
    <nav className={s.navContainer}>
      <div className={s.logo}>
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={120}
          height={100}
        />
      </div>
      <div className={s.navItems}>
        <ul className={s.listaItem}>
          {navItems.map(({ item, icon, notification, href, desenvolvido }) => {
            const linkAtivo = pathname === href;

            return (
              <li key={item} className={s.liContainer}>
                {desenvolvido ? (
                  <Link
                    href={href}
                    className={`${s.navIten} ${linkAtivo ? s.active : ""}`}
                  >
                    <div className={s.navIcon}>
                      <Image src={icon} width={20} height={20} alt="Svg" />
                      <span>{item}</span>
                    </div>
                    {notification ? <p className={s.notification}>1</p> : ""}
                  </Link>
                ) : (
                  <button className={s.navIcon} onClick={() => setModal(item)}>
                    <div className={s.navIcon}>
                      <Image src={icon} width={20} height={20} alt="Svg" />
                      <span>{item}</span>
                    </div>
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        <section className={s.infoCards}>
          <article className={s.temperatura}>
            <p>TODAY IN CASSIS</p>
            <h2>27°</h2>
            <span>Sunny - light breeze</span>
            <div className={s.circule} />
          </article>
          <div className={s.linha} />
          <footer className={s.footer}>
            <p>EST. 1987</p>
            <span>MAISON SOLEIL - 12 RUE DES OLIVEIRS - CASSIS</span>
            <p>&copy; 2026 MAISON SOLEIL</p>
          </footer>
        </section>
      </div>
    </nav>
  );
}
