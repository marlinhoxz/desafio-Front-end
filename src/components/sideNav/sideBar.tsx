"use client";

import { useEffect, useState } from "react";
import s from "./sideBar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X, Menu } from "lucide-react";

type itemProps = {
  item: string;
  icon: string;
  notification?: boolean;
  desenvolvido: boolean;
  href: string;
};

type SideBarProps = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
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

export default function SideBar({ isActive, setIsActive }: SideBarProps) {
  const pathname = usePathname();
  const [desenvolvido, setDesenvolvido] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = desenvolvido ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [desenvolvido]);

  return (
    <>
      <nav className={`${s.navContainer} ${isActive ? s.active : ""}`}>
        {isActive && (
          <div className={s.overlay} onClick={() => setIsActive(false)} />
        )}

        <div className={s.logo}>
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={120}
            height={100}
          />
          <button onClick={() => setIsActive(false)} className={s.closeMenu}>
            <X />
          </button>
        </div>
        <div className={`${s.navItems}`}>
          <ul className={s.listaItem}>
            {navItems.map(
              ({ item, icon, notification, href, desenvolvido }) => {
                const linkAtivo = pathname === href;

                return (
                  <li key={item} className={s.liContainer}>
                    {desenvolvido ? (
                      <Link
                        href={href}
                        className={`${s.navIten} ${linkAtivo ? s.active : ""}`}
                        onClick={() => setIsActive(false)}
                      >
                        <div className={s.navIcon}>
                          <Image src={icon} width={20} height={20} alt="Svg" />
                          <span>{item}</span>
                        </div>
                        {notification ? (
                          <p className={s.notification}>1</p>
                        ) : (
                          ""
                        )}
                      </Link>
                    ) : (
                      <button
                        className={s.navIcon}
                        onClick={() => {
                          setDesenvolvido(item);
                          setIsActive(false);
                        }}
                      >
                        <div className={s.navIcon}>
                          <Image src={icon} width={20} height={20} alt="Svg" />
                          <span>{item}</span>
                        </div>
                      </button>
                    )}
                  </li>
                );
              },
            )}
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
      {desenvolvido && (
        <div className={s.modalOverlay} onClick={() => setDesenvolvido(null)}>
          <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 className={s.modalTitle}>Em Desenvolvimento</h2>
            <p className={s.modalDescription}>
              Área de <span>{desenvolvido}</span> ainda está em desenvolvimento
            </p>
            <button
              className={s.modalButton}
              onClick={() => setDesenvolvido(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
