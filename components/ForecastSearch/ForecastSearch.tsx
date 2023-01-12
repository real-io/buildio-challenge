import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./ForecastSearch.module.scss";

interface ForecastSearchProps {}

const ForecastSearch = (props: ForecastSearchProps) => {
  const router = useRouter();
  const [zipCode, setZipCode] = useState("");

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setZipCode(e.currentTarget.value);
  };

  const handleOnClick = () => {
    router.push(`/weather/${zipCode}`);
  };

  return (
    <div>
      <h1 className={styles.title}>Find my Weather Forecast!</h1>
      <div className={styles.search}>
        <input
          onChange={handleOnChange}
          value={zipCode}
          placeholder="Type a zipcode"
        ></input>
        <button className={styles.search_btn} onClick={handleOnClick}>
          Get Weather
        </button>
      </div>
    </div>
  );
};

export default ForecastSearch;
