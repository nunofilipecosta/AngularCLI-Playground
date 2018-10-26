import { Component } from '@angular/core';
import { NcLoggerService } from 'nc-logger';

const num = 7;

@Component({
  selector: 'nc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgTest';

  /**
   *
   */
  constructor(logger: NcLoggerService) {
    logger.log('Hello World');
  }
}
