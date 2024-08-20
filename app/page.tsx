import Image from "next/image";
import styles from "./page.module.css";
import Form from "./components/Form"

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Aloha!</h1>
     <Form/>
    </main>
  );
}
