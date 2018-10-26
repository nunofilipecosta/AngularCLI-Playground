import { TestBed } from '@angular/core/testing';

import { NcLoggerService } from './nc-logger.service';

describe('NcLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NcLoggerService = TestBed.get(NcLoggerService);
    expect(service).toBeTruthy();
  });
});
