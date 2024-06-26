import { observer } from "mobx-react-lite";
import { InputField } from "./InputField";
import { JokeList } from "./JokeList";
import { useStore } from "./state";
import { JokeCount } from "./JokeCount";
import styles from "./App.module.scss";

export const App = observer(() => {
  const store = useStore();

  return (
    <div className="mt-52 mb-40 mx-4 md:mx-20 lg:mx-40 2xl:mx-64 ">
      <div className="mb-0 mx-auto w-full lg:w-3/5">
        <InputField />

        {store.loadJokes.state === "resolved" &&
          <JokeCount />
        }
      </div>

      {store.loadJokes.state === "resolved" && store.jokes.length > 0 &&
        <JokeList jokes={store.jokes} />
      }

      {store.loadJokes.state === "rejected" &&
        <p className={styles.error}>Something went wrong...</p>
      }

      {store.loadJokes.state === "pending" &&
        <p className={styles.loading}>Pending...</p>
      }

    </div>
  )
})