import { makeAutoObservable, runInAction } from "mobx"
import { task } from "mobx-task";
import { newFetch } from "./fetch";
import { createContext, useContext } from "react";

export type Joke = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

class State {

  jokes: Joke[] = [];

  constructor() {
    makeAutoObservable(this)
  }

  loadJokes = task(async (query: string) => {
    const jokes = await newFetch(query);

    if (jokes?.data.result) {
      console.log("Got jokes", jokes.data.result.length);

      runInAction(() => {
        this.jokes = jokes.data.result;
      })
    }

    else {
      console.log("No jokes");

    }
  },
    { state: "resolved" })
}

const jokesState = new State();

const jokesContext = createContext(jokesState);

export const useStore = () => {
  return useContext<typeof jokesState>(jokesContext);
};