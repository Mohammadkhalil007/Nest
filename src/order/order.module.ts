import { Module } from '@nestjs/common';
import { Feature1Module } from './feature/feature1.module';
import { Feature2Module } from './feature/feature2.module';
//@module is basically a decorator of module import . so it takes some imports
@Module({
  imports: [Feature1Module, Feature2Module],
  controllers: [],
  providers: [],
  exports:[]
})

export class OrderModule {
  constructor(){
    console.log("order Module is in Working state")
  }
}
