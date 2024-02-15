import { EventPriority } from "./constants";

export interface Events {
  _id: string;
  title: string;
  description: string;
  priority: EventPriority;
  startDate: string;
  endDate: string;
}
