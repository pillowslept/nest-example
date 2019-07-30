import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseDto } from 'shared/dto/response.dto';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, ResponseDto> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseDto> {
    return next.handle().pipe(map(data => new ResponseDto(data)));
  }
}
