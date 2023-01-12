import React from "react";
import styles from "./Title.module.scss";

export enum Level {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
}

interface TitleProps {
  content?: string | number;
  level: string;
  addClassName?: string;
}

const Title = (props: TitleProps) => {

  switch (props.level) {
    case Level.H1:
      return <h1 className={[styles.h1, props.addClassName].join(' ')}>{props.content}</h1>;
    case Level.H2:
      return <h2 className={[styles.h2, props.addClassName].join(' ')}>{props.content}</h2>;
    case Level.H3:
      return <h3 className={[styles.h3, props.addClassName].join(' ')}>{props.content}</h3>;
    default:
      return <h1 className={[styles.h1, props.addClassName].join(' ')}>{props.content}</h1>;
  }
};

Title.Levels = {
    H1: Level.H1,
    H2: Level.H3,
    H3: Level.H3,
}

export default Title;
