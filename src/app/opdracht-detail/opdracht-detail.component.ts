import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Opdracht} from "../services/opdrachten/opdracht";
import {OpdrachtenService} from "../services/opdrachten/opdrachten.service";

@Component({
  selector: 'app-opdracht-detail',
  templateUrl: './opdracht-detail.component.html',
  styleUrls: ['./opdracht-detail.component.scss'],
  providers: [OpdrachtenService]
})
export class OpdrachtDetailComponent implements OnInit {

  private id: Number;
  private opdracht: Opdracht;

  constructor(
    private route: ActivatedRoute,
    private opdrachtenService: OpdrachtenService
  ) { }

  getOpdracht(): void {
    this.opdrachtenService.getOpdracht(this.id)
      .then((opdracht: Opdracht) => {
        this.opdracht = opdracht;
      })
    ;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
      this.getOpdracht();
    });
  }
}
