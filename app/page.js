import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import SearchBar from "./components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="max-w-3xl m-auto">
        <SearchBar />
      </main>
    </>
  );
}
