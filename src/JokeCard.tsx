import { Joke } from "./state"
import styles from "./JokeCard.module.scss";

interface IJokeCard {
  joke: Joke;
  index: number;
}

export const JokeCard = ({ joke, index }: IJokeCard) => {
  return (
    <a className={`${styles.link}
    ${index <= 1
        ? "col-span-1 md:col-span-2 lg:col-span-2 2xl:col-span-3 min-h-60 md:min-h-96"
        : "col-span-1 md:col-span-2 lg:col-span-2 2xl:col-span-2 min-h-60"
      }`}
      href={joke.url}
      rel="external nofollow"
      referrerPolicy="no-referrer"
      target="_blank"
    >
      <div className={styles["joke-card"]}>
        <div className={`
        ${styles["joke-text"]}
        ${index <= 1
            ? "text-base/base md:text-2xl/2xl 2xl:text-3xl/3xl"
            : "text-base/base md:text-2xl/2xl"
          }
      `}
        >{joke.value}</div>
        <div className={styles["joke-info-block"]}>
          <p className={styles["joke-id"]}>{joke.id}</p>
          <p className={styles["joke-date"]}>{joke.updated_at.split(" ")[0].split("-").join(".")}</p>
        </div>
      </div>
    </a>
  )
}