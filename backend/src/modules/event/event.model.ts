import { modelOptions, prop } from "@typegoose/typegoose";
import { EventPriority } from "./event.constants";

@modelOptions({
  schemaOptions: { timestamps: true, collection: "eventScheduler" },
})
export class EventSchedulerModel {
  @prop()
  title: string;

  @prop()
  description: string;

  @prop()
  startDate: Date;

  @prop()
  endDate: Date;

  @prop({ enum: EventPriority })
  priority: EventPriority;
}
