import { Module } from '@nestjs/common';
import { Feature3Module } from './feature/feature3.module';
//@module is basically a decorator of module import . so it takes some imports
@Module({
  imports: [Feature3Module],
  controllers: [],
  providers: [],
  exports:[]
})

export class ChatModule {
  constructor(){
    console.log("chat Module is in Working state")
  }
}
