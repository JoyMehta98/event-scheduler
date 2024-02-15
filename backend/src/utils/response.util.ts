import { HttpStatus } from "@nestjs/common";
import { Response } from "express";

interface CommonResponseType<T> {
  data: T;
  status?: HttpStatus;
}

interface ErrorResponseType {
  res: Response;
  error: Error;
  status?: HttpStatus;
}

class ResponseUtils {
  public success<T>(
    resp: Response,
    { data, status = HttpStatus.OK }: CommonResponseType<T>,
  ): Response<CommonResponseType<T>> {
    return resp.status(status).send({ data });
  }

  public error({ res, error, status }: ErrorResponseType) {
    return res
      .status(status || HttpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
  }
}

export const response = new ResponseUtils();
