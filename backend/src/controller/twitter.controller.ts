import { Controller, Get } from '@nestjs/common';
import { TwitterApi } from 'twitter-api-v2';

// TODO: Reactの練習用なのでコントローラにベタ書き、後で直す
@Controller()
export class TwitterController {
  @Get()
  async getHello() {
    return await getTweets();
  }
}

const getTweets = async () => {
  const twitterClient = new TwitterApi(process.env.BEARER_TOKEN as string);
  // @see: https://developer.twitter.com/en/docs/twitter-api/tweets/search/integrate/build-a-query
  const query = 'ゲンガー ユナイト -is:reply';
  const options = { max_results: 10 };
  const results = await twitterClient.v2.search(query, options);

  return results.data.data;
};
