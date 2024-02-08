import { Injectable } from '@nestjs/common';
import { TweetsRepository } from './tweets.repository';
import { Tweet, User } from '@prisma/client';

/* eslint-disable */
@Injectable()
export class TweetsService {
  constructor(private repository: TweetsRepository) {}

  async createTweet(params: { content: Tweet['content']; userId: User[`id`] }) {
    const { content, userId } = params;

    const tweet = await this.repository.createTweet({
        data: { 
            content, 
            user: {
                connect: {
                    id: userId
                }
            }
        }
    })

    return tweet
  }

  async getTweets() {
    const tweets = this.repository.getTweets({})
    return tweets
  }
}
