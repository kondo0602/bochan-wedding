import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type TweetType = {
  edit_history_tweet_ids: string[];
  id: string;
  text: string;
};

const options: AxiosRequestConfig = {
  method: "get",
  url: `http://localhost:8080`,
};

function Twitter() {
  const [tweets, setTweets] = useState<TweetType[]>([]);

  useEffect(() => {
    axios(options)
      .then((res: AxiosResponse<TweetType[]>) => {
        const { data } = res;
        setTweets(data);
      })
      .catch((error: AxiosError) => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {tweets.map((tweet) => {
          return <li key={tweet.id}>{tweet.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default Twitter;
