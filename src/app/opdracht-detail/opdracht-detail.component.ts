/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/bootstrap/index.d.ts" />

import {Component, OnInit, AfterViewInit} from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private opdrachtenService: OpdrachtenService
  ) {
    window.scrollTo(0, 0);
  }

  getOpdracht(): void {
    this.opdrachtenService.getOpdracht(this.id)
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
  }

  ngAfterViewInit(): void {
    let $slider = $('#opdracht_4_slider');
    let $photo  = $('#opdracht-photo');

    // 20 seconden voor elke slide.
    $slider.carousel({
      interval: 1000 * 20
    });

    // verander de achtergrond.
    $slider.on('slid.bs.carousel', function () {

      // Haal de source van de afbeelding op.
      let source = $slider.find('.active img').attr('src');

      // Veranderd de achtergrond afbeelding.
      $photo.css('background-image', 'url(' + source + ')');
    });
  }
}
