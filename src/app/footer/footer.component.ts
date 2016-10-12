import {Component} from "@angular/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  private student_year: number;
  private current_year: number;
  private school_year: number;

  constructor() {
    this.makeDate();
  }

  makeDate(): void {
    this.current_year = new Date().getFullYear();
    this.school_year  = this.current_year + 1;

    this.student_year = (this.school_year > 4) ? this.school_year - 2015 : 4;
  }
}
