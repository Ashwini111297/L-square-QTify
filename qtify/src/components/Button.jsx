
import React from "react";
import styles from "./Button.module.css";

function Button({
  label = "Give Feedback",
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
