import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ik',
  templateUrl: './ik.component.html',
  styleUrls: ['./ik.component.scss']
})
export class IkComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // Laad alle tooltips.
    $('[data-toggle="tooltip"]').tooltip();
  }
}
