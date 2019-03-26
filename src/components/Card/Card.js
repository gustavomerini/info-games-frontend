import React from "react";
import styles from "./Card.module.css";
const Card = props => {
  console.log(props);
  return (
    <>
      <div class={styles.card}>
        <div class={styles.container}>
          <img src={props.url} alt="tiltado" />

          <span>
            <b>{props.title}</b>
          </span>
          <span> {props.price} </span>
        </div>
      </div>
    </>
  );
};

export default Card;
