import { Response } from "express";

export enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
}

const httpResponseFactory = (statusCode: HttpStatus) => {
  const ok = (res: Response, data?: any): Response => {
    return res.status(statusCode).json({
      status: statusCode,
      statusMsg: "Success",
      data: data,
    });
  };

  const notFound = (res: Response, data?: any): Response => {
    return res.status(statusCode).json({
      status: statusCode,
      statusMsg: "Not Found",
      error: data,
    });
  };

  const unauthorized = (res: Response, data?: any): Response => {
    return res.status(statusCode).json({
      status: statusCode,
      statusMsg: "Unauthorized",
      error: data,
    });
  };

  const forbidden = (res: Response, data?: any): Response => {
    return res.status(statusCode).json({
      status: statusCode,
      statusMsg: "Forbidden",
      error: data,
    });
  };

  const error = (res: Response, data?: any): Response => {
    return res.status(statusCode).json({
      status: statusCode,
      statusMsg: "Internal server error",
      error: data,
    });
  };

  return { ok, notFound, unauthorized, forbidden, error };
};

export const httpResponse = httpResponseFactory(HttpStatus.OK);
