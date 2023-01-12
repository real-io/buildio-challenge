import React from "react";
import styles from "./Text.module.scss";

interface TextProps {
  content?: string | number;
  addClassName?: string;
}

const Text = (props: TextProps) => {
  return (
    <p className={[styles.text, props.addClassName].join(" ")}>
      {props.content}
    </p>
  );
};

export default Text;
