import axios from "axios";
import { Joke } from "./state";

const URL: string = "https://api.chucknorris.io/jokes/search?query=";

interface JokeResponse {
  total: number;
  result: Joke[];
}

export const newFetch = async (searchStr: string) => {
  const _url = `${URL}${searchStr}`;

  try {
    const response = await axios.get<JokeResponse>(_url);
    return response;
  }
  catch (error) {
    console.error(error);
  }
}