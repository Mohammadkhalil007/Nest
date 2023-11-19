import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { OrderModule } from './order/order.module';
//@module is basically a decorator of module import . so it takes some imports
@Module({
  imports: [UsersModule,OrderModule,ChatModule],
  controllers: [],
  providers: [],
  exports:[]
})

export class RootModule {
  constructor(){
    console.log("Root Module is in Working state")
  }
}
