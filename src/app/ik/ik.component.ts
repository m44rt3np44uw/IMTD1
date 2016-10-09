import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ik',
  templateUrl: './ik.component.html',
  styleUrls: ['./ik.component.scss']
})
export class IkComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Laad alle tooltips.
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
}
