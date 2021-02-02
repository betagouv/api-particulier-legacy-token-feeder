import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenModule } from 'src/tokens/token.module';
import { AppController } from './app.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), TokenModule],
  controllers: [AppController],
})
export class AppModule {}
