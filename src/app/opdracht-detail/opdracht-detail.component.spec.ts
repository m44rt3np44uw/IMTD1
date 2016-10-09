/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ActivatedRoute } from "@angular/router";
import { OpdrachtDetailComponent } from './opdracht-detail.component';
import { OpdrachtenService } from "../services/opdrachten/opdrachten.service";

describe('Component: OpdrachtDetail', () => {
  it('should create an instance', () => {
    let component = new OpdrachtDetailComponent(
      new ActivatedRoute(),
      new OpdrachtenService()
    );
    expect(component).toBeTruthy();
  });
});
