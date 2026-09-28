import Image from "next/image";
import s from "./mobileTopBar.module.css";
import { Menu } from "lucide-react";
import { useEffect } from "react";

type HeaderProps = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
};

export default function MoblieTopBar({ isActive, setIsActive }: HeaderProps) {
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  return (
    <div className={s.mobileTopBar}>
      <div className={s.mobileLogo}>
        <Image
          src="/assets/images/icon-sun.svg"
          alt="Sun"
          width={50}
          height={50}
        />
        <div className={s.mobileLogoText}>
          <span className={s.mobileLogoTop}>Maison</span>
          <span className={s.mobileLogoBottom}>Soleil</span>
        </div>
      </div>
      {!isActive && (
        <button className={s.openMenu} onClick={() => setIsActive(true)}>
          <Menu size={20} />
        </button>
      )}
    </div>
  );
}
