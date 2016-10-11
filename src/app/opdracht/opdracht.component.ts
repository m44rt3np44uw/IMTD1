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
  private imageClasses: Array<string>;
  private textClasses: Array<string>;

  constructor(private opdrachtenService: OpdrachtenService) {

  }

  getOpdracht(): void {
    OpdrachtenService.getOpdracht(this.id)
      .then((opdracht: Opdracht) => {
        this.opdracht = opdracht;
      })
    ;
  }

  makeTextClasses(): void {

    if(this.id == 1) {
      this.textClasses = [
        'col-md-8',
        'col-md-pull-4',
      ]
    }

    else if(this.id == 3) {
      this.textClasses = [
        'col-md-5',
        'col-md-pull-7'
      ]
    }

    else if(this.id != 1) {
      this.textClasses = [
        'col-md-5'
      ]
    }
  }

  makeImageClasses(): void {

    if(this.id == 1) {
      this.imageClasses = [
        'col-xs-6',
        'col-xs-offset-3',
        'col-sm-4',
        'col-sm-offset-4',
        'col-md-3',
        'col-md-push-9'
      ];
    }

    else {
      this.imageClasses = [
        'col-xs-10',
        'col-xs-offset-1',
        'col-sm-8',
        'col-sm-offset-2',
        'col-md-6'
      ]
    }
  }

  ngOnInit(): void {
    this.getOpdracht();
    this.makeImageClasses();
    this.makeTextClasses();
  }

  ngAfterViewInit(): void {
    $('#opdracht_4_slider').carousel({
      interval: 1000 * 20
    });
  }
}
