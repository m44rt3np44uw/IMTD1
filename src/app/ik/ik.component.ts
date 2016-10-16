import {Component} from "@angular/core";

@Component({
  selector: 'app-ik',
  templateUrl: './ik.component.html',
  styleUrls: ['./ik.component.scss']
})
export class IkComponent {

  private ik: string;

  constructor() {
    this.ik = "Mijn naam is Maarten Paauw, ben 23 jaar oud en woon in Den Haag samen met " +
      "mijn vriendin. Ik ben tweedejaars student van de opleiding Informatica aan de Hogeschool " +
      "Leiden. Voordat ik aan deze opleiding begon heb ik twee MBO opleidingen gedaan op het " +
      "gebied van grafische vormgeving en techniek. Naast mijn huidige studie werk ik als " +
      "freelancer voor verschillende opdrachtgevers. Hierbij bouw ik websites, ontwerp advertenties " +
      "en ander drukwerk en doe beheer- en advieswerkzaamheden.";
  }
}
