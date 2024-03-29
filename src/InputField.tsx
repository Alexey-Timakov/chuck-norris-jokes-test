import { SyntheticEvent, useState } from "react";
import styles from "./InputField.module.scss"
import { useStore } from "./state";
import { useThrottle } from "./useThrottle";

export const InputField = () => {
  const state = useStore();
  const [searchText, setSearchText] = useState<string>("");

  const performSearch = (query: string) => {
    state.loadJokes(query)
  };

  const throttledAction = useThrottle(performSearch, 1000);

  const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const _query = e.currentTarget.value;
    setSearchText(_query);

    if (_query.length >= 3) {
      throttledAction(_query);
    }
  };


  return (
    <div className={styles["input-wrapper"]}>
      <input
        value={searchText}
        onChange={onInputChange}
        className={styles.query}
        type="text"
        name="joke"
        id="joke"
        autoFocus
        placeholder="Search jokes..."
      />
    </div>
  )
}