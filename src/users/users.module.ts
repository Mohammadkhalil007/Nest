import { Module } from '@nestjs/common';

//@module is basically a decorator of module import . so it takes some imports
@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports:[]
})

export class UsersModule {
  constructor(){
    console.log("user Module is in Working state")
  }
}
