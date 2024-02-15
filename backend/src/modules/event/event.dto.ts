import { IsDateString, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { EventPriority } from "./event.constants";

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(EventPriority)
  priority: EventPriority;

  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @IsNotEmpty()
  @IsDateString()
  endDate: string;
}
