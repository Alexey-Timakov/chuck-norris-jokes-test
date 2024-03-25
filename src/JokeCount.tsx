import { useStore } from "./state";
import styles from "./JokesCount.module.scss";

export const JokeCount = () => {
  const state = useStore();

  if (state.jokes.length === 0) return null;

  return (
    <p className={styles.count}>Found jokes: {state.jokes.length}</p>
  )
}