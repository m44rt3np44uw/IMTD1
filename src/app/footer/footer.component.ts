/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/bootstrap/index.d.ts" />

import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
    // Laad alle tooltips.
    $('[data-toggle="tooltip"]').tooltip();
  }
}
