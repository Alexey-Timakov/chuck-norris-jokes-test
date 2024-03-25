import { JokeCard } from "./JokeCard";
import { Joke } from "./state"
import styles from "./JokeList.module.scss";

interface IJokeList {
  jokes: Joke[];
}

export const JokeList = ({ jokes }: IJokeList) => {
  return (
    <div className={styles["joke-list"]}>
      {jokes.map((joke) => {
        return (
          <JokeCard
            key={joke.id}
            joke={joke}
          />
        )
      })}
    </div>
  )
}