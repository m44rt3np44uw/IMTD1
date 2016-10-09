/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OpdrachtenService } from './opdrachten.service';

describe('Service: Opdrachten', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpdrachtenService]
    });
  });

  it('should ...', inject([OpdrachtenService], (service: OpdrachtenService) => {
    expect(service).toBeTruthy();
  }));
});
