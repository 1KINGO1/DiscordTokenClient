import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { DiscordModule } from './discord/discord.module';

@Module({
  imports: [LoginModule, DiscordModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
