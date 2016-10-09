import {Component, OnInit, Input} from "@angular/core";
import {OpdrachtenService} from "../services/opdrachten/opdrachten.service";
import {Opdracht} from "../services/opdrachten/opdracht";

@Component({
  selector: 'app-opdracht',
  templateUrl: './opdracht.component.html',
  styleUrls: ['./opdracht.component.scss'],
  providers: [OpdrachtenService]
})
export class OpdrachtComponent implements OnInit {

  @Input() private id: any;

  protected opdracht: Opdracht;

  constructor(private opdrachtenService: OpdrachtenService) { }

  getOpdracht(): void {
    this.opdrachtenService.getOpdracht(this.id)
      .then((opdracht: Opdracht) => {
        this.opdracht = opdracht
      })
    ;
  }

  ngOnInit() {
    this.getOpdracht();

    $(document).ready(function () {

      // 20 seconden voor elke slide.
      $('#opdracht_4_slider').carousel({
        interval: 1000 * 20
      });
    });
  }
}
