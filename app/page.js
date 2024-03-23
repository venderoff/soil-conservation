import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>HomePage for Soil and Conservation</h1>
      <p><Link href="/about">About</Link></p>
      <p><Link href="/login">Login</Link></p>
    </main>
  );
}
