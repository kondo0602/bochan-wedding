import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TwitterController } from './controller/twitter.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] })],
  controllers: [TwitterController],
  providers: [],
})
export class AppModule {}
