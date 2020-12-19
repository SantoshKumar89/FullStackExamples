import { TestBed } from '@angular/core/testing';

import { CraftFormService } from './craft-form.service';

describe('CraftFormService', () => {
  let service: CraftFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CraftFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
