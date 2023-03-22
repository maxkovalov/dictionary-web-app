import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import className from "classnames";

export default function Home() {
  return (
    <>
      <body className="px-12 dark:bg-black">
        <main className="max-w-3xl m-auto">
          <SearchBar />
          <Result />
        </main>
      </body>
    </>
  );
}
