import { Injectable, NestMiddleware, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { UNAUTHORIZED_MESSAGE } from 'utils/constants/messages';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: any) {
    const authorization = req.header('Authorization');

    if (!authorization) {
      Logger.log(UNAUTHORIZED_MESSAGE, 'LoggerMiddleware');
      return res.status(HttpStatus.UNAUTHORIZED).send({ success: false });
    } else {
      next();
    }
  }
}
