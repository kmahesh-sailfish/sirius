import { TestBed } from '@angular/core/testing';

import { SiriusService } from './sirius.service';

describe('SiriusService', () => {
  let service: SiriusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiriusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
