import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {

      // Laad alle tooltips.
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

}
