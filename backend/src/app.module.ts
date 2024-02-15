import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { appConfig } from "config/app.config";
import { EventModule } from "modules/event/event.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [TypegooseModule.forRoot(appConfig.connectionUrl), EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
