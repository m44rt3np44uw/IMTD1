import {Component, Input} from '@angular/core';
import {Opdracht} from "../interfaces/opdrachten/opdracht";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  @Input() private opdracht: Opdracht;

  constructor() {
  }
}
