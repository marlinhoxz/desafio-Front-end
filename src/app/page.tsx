"use client";

import Header from "@/components/header/header";
import SideBar from "@/components/sideNav/sideBar";
import styles from "./page.module.css";
import Cards from "@/components/cards/cards";
import CardsTwo from "@/components/cards/otherCards/cards2";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <main className={styles.container}>
      <SideBar isActive={isActive} setIsActive={setIsActive} />
      <div className={styles.componets}>
        <Header isActive={isActive} setIsActive={setIsActive} />
        <Cards />
        <CardsTwo />
      </div>
    </main>
  );
}
