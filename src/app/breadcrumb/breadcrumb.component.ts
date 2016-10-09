import {Component, OnInit, Input} from '@angular/core';
import {Opdracht} from "../services/opdrachten/opdracht";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() private opdracht: Opdracht;

  constructor() { }

  ngOnInit() {
  }

}
