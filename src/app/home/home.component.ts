import {Component} from '@angular/core';
import {ScrollToTop} from "./scrollToTop";
import {Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ScrollToTop {

  constructor(private router: Router,
              private location: Location) {
    super();

    this.router.events.subscribe((path) => {
      if (path.url !== location.path()) {
        this.scrollToTop(0);
      }
    });
  }
}
