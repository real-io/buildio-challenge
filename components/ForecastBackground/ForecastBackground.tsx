import styles from "./ForecastBackground.module.scss";

interface BackgroundProps {
  children: React.ReactNode;
  weather?: string;
}

const ForecastBackground = (props: BackgroundProps) => {
  return (
    <div className={[styles.wrapper, styles.background].join(" ")}>
      {props.children}
    </div>
  );
};

export default ForecastBackground;
