import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from "@nestjs/common";
import { Response } from "express";
import { CreateEventDto } from "./event.dto";
import { EventService } from "./event.service";
import { response } from "utils/response.util";

@Controller("events")
export class EventController {
  constructor(private eventService: EventService) {}

  @Post()
  async createEvent(@Res() res: Response, @Body() body: CreateEventDto) {
    try {
      const data = await this.eventService.createEvent(body);

      return response.success(res, { data, status: HttpStatus.CREATED });
    } catch (error) {
      return response.error({ res, error });
    }
  }

  @Put(":id")
  async updateEvent(
    @Res() res: Response,
    @Param("id") id: string,
    @Body() body: Partial<CreateEventDto>,
  ) {
    try {
      const data = await this.eventService.updateEvent(id, body);

      return response.success(res, { data });
    } catch (error) {
      return response.error({ res, error });
    }
  }

  @Delete(":id")
  async deleteEvent(@Res() res: Response, @Param("id") id: string) {
    try {
      const data = await this.eventService.deleteEvent(id);

      return response.success(res, { data });
    } catch (error) {
      return response.error({ res, error });
    }
  }

  @Get()
  async getAllEvents(@Res() res: Response) {
    try {
      const data = await this.eventService.getAllEvents();

      return response.success(res, { data });
    } catch (error) {
      return response.error({ res, error });
    }
  }
}
