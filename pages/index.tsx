import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./../styles/Home.module.scss";
import Container from "../components/Container/Container";

export default function Home() {
  const router = useRouter();
  const [zipCode, setZipCode] = useState("");

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setZipCode(e.currentTarget.value);
  };

  const handleOnClick = () => {
    router.push(`/weather/${zipCode}`);
  };

  return (
    <main className={styles.main}>
        <div>
          <h1>Find my Forecast App!</h1>
          <div className={styles.search}>
            <input
              onChange={handleOnChange}
              value={zipCode}
              placeholder="Type a zipcode"
            ></input>
            <button onClick={handleOnClick}>Get Weather</button>
          </div>
        </div>
    </main>
  );
}
