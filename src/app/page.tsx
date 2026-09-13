import Header from "@/components/header/header";
import SideBar from "@/components/sideNav/sideBar";
import styles from './page.module.css'
import Cards from "@/components/cards/cards";
export default function Home() {
  return <main className={styles.container}>

    <SideBar />
    <div className={styles.componets}>
    <Header />
    <Cards />
    </div>
  </main>;
}
