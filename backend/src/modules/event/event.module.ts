import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { EventSchedulerModel } from "./event.model";
import { EventController } from "./event.controller";
import { EventService } from "./event.service";

@Module({
  imports: [TypegooseModule.forFeature([EventSchedulerModel])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
