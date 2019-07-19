import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: any) {
    const authorization = req.header('Authorization');

    if (!authorization) {
      // console.log('Request...', req.headers);
      return res.status(HttpStatus.UNAUTHORIZED).send({ success: false });
    } else {
      next();
    }
  }
}
