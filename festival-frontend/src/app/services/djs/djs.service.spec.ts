import { TestBed } from '@angular/core/testing';

import { DjsService } from './djs.service';

describe('DjsService', () => {
  let service: DjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
