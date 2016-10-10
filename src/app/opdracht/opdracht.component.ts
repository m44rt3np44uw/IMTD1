/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/bootstrap/index.d.ts" />

import {Component, OnInit, Input, AfterViewInit} from "@angular/core";
import {OpdrachtenService} from "../services/opdrachten/opdrachten.service";
import {Opdracht} from "../interfaces/opdrachten/opdracht";

@Component({
  selector: 'app-opdracht',
  templateUrl: './opdracht.component.html',
  styleUrls: ['./opdracht.component.scss'],
  providers: [OpdrachtenService]
})
export class OpdrachtComponent implements OnInit, AfterViewInit {

  @Input() private id: any;

  private opdracht: Opdracht;

  constructor(private opdrachtenService: OpdrachtenService) { }

  getOpdracht(): void {
    OpdrachtenService.getOpdracht(this.id)
      .then((opdracht: Opdracht) => {
        this.opdracht = opdracht;
      })
    ;
  }

  ngOnInit(): void {
    this.getOpdracht();
  }

  ngAfterViewInit(): void {
    $('#opdracht_4_slider').carousel({
      interval: 1000 * 20
    });
  }
}
