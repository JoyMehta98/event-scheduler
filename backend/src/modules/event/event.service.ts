import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { EventSchedulerModel } from "./event.model";
import { ReturnModelType } from "@typegoose/typegoose";
import { CreateEventDto } from "./event.dto";

@Injectable()
export class EventService {
  constructor(
    @InjectModel(EventSchedulerModel)
    private eventSchedulerModel: ReturnModelType<typeof EventSchedulerModel>,
  ) {}

  async createEvent(payload: CreateEventDto) {
    return this.eventSchedulerModel.create(payload);
  }

  async updateEvent(id: string, payload: Partial<CreateEventDto>) {
    return this.eventSchedulerModel.findByIdAndUpdate(id, payload);
  }

  async deleteEvent(id: string) {
    return this.eventSchedulerModel.findByIdAndRemove(id);
  }

  async getAllEvents() {
    return this.eventSchedulerModel.find();
  }
}
