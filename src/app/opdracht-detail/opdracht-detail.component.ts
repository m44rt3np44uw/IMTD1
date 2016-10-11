/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/bootstrap/index.d.ts" />

import {Component, OnInit, AfterViewInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Opdracht} from "../interfaces/opdrachten/opdracht";
import {OpdrachtenService} from "../services/opdrachten/opdrachten.service";

@Component({
  selector: 'app-opdracht-detail',
  templateUrl: './opdracht-detail.component.html',
  styleUrls: ['./opdracht-detail.component.scss'],
  providers: [OpdrachtenService]
})
export class OpdrachtDetailComponent implements OnInit, AfterViewInit {

  private id: Number;
  private opdracht: Opdracht;
  private imageClasses: Array<string>;

  constructor(private route: ActivatedRoute,
              private opdrachtenService: OpdrachtenService) {
  }

  getOpdracht(): void {
    OpdrachtenService.getOpdracht(this.id)
      .then((opdracht: Opdracht) => {
        this.opdracht = opdracht;
      })
    ;
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'] - 1;
      this.getOpdracht();
    });

    this.makeImageClasses();
  }

  ngAfterViewInit(): void {

    $(document).ready(function () {

      // Variables.
      let $slider = $('#opdracht_4_slider'),
        $photo = $('#opdracht-photo');

      // 20 seconden voor elke slide.
      $slider.carousel({
        interval: 1000 * 20
      });

      // verander de achtergrond.
      $slider.on('slid.bs.carousel', function () {

        // Haal de source van de afbeelding op.
        let source = $slider.find('.active img').attr('src');

        // Veranderd de achtergrond afbeelding.
        $photo.css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("' + source + '")');
      });
    });
  }

  private makeImageClasses(): void {

    if (this.id == 1) {
      this.imageClasses = [
        'col-sm-4',
        'col-sm-offset-4',
        'col-xs-8',
        'col-xs-offset-2'
      ];
    }

    else {
      this.imageClasses = [
        'col-md-6',
        'col-md-offset-3',
        'col-sm-8',
        'col-sm-offset-2',
        'col-xs-8',
        'col-xs-offset-2'
      ];
    }
  }
}
