import { Body, Controller, Post, Get } from '@nestjs/common';
import { TweetsService } from 'src/modules/tweets/tweets.service';

@Controller('api')
export class ApiController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Post(`tweet`)
  async createTweet(@Body() data: { content: string; userId: string }) {
    const { content, userId } = data;
    return this.tweetsService.createTweet({ content, userId: Number(userId) });
  }

  @Get('tweets')
  async getTweets() {
    return this.tweetsService.getTweets();
  }
}
