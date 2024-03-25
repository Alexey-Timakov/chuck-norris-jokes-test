import { Joke } from "./state"
import styles from "./JokeCard.module.scss";

interface IJokeCard {
  joke: Joke;
}

export const JokeCard = ({ joke }: IJokeCard) => {
  return (
    <div className={styles["joke-card"]}>
      <div className={styles["joke-text"]}>{joke.value}</div>
      <div className={styles["joke-info-block"]}>
        <p className={styles["joke-id"]}>{joke.id}</p>
        <p className={styles["joke-date"]}>{joke.updated_at.split(" ")[0]}</p>
      </div>
    </div>
  )
}