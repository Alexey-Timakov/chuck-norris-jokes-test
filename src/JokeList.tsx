import { JokeCard } from "./JokeCard";
import { Joke } from "./state"

interface IJokeList {
  jokes: Joke[];
}

export const JokeList = ({ jokes }: IJokeList) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-8">
      {jokes.map((joke, index) => {
        return (
          <JokeCard
            key={joke.id}
            joke={joke}
            index={index}
          />
        )
      })}
    </div>
  )
}