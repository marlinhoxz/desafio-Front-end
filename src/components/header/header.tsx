import Image from "next/image";
import s from "./header.module.css";
import MoblieTopBar from "./mobileTopBar";

type HeaderProps = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
};

export default function Header({ isActive, setIsActive }: HeaderProps) {
  return (
    <>
      <MoblieTopBar isActive={isActive} setIsActive={setIsActive} />
      <header className={s.headerContainer}>
        <div className={s.apresentcao}>
          <p>BOOKING - CONFIRMED</p>
          <h2>
            Bem-vindo, <span className={s.nomeColor}>Marlinho.</span>
          </h2>
        </div>
        <div className={s.buttons}>
          <button className={s.btn1}>Print receipt</button>
          <button className={s.btn2}>Add to calendar</button>
        </div>
      </header>
    </>
  );
}
