import { SyntheticEvent, useState } from "react";
import styles from "./InputField.module.scss"
import { useStore } from "./state";

export const InputField = () => {
  const state = useStore();
  const [searchText, setSearchText] = useState<string>("");

  const performSearch = (query: string) => {
    state.loadJokes(query)
  };

  const onInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const _query = e.currentTarget.value;
    setSearchText(_query);

    if (_query.length >= 3) {
      performSearch(_query);
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