import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NcLoggerService {

  constructor() { }

  log(message: string) {
    console.log(message);
  }
}
