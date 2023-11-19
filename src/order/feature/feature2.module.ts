import { Module } from '@nestjs/common';

//@module is basically a decorator of module import . so it takes some imports
@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports:[]
})

export class Feature2Module {
  constructor(){
    console.log("Feature2Module is in Working state")
  }
}
