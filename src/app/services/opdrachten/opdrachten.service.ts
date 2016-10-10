import {Injectable} from "@angular/core";
import {Opdracht} from "../../interfaces/opdrachten/opdracht";
import {OPDRACHTEN} from "./opdrachten.mock";

@Injectable()
export class OpdrachtenService {

  static getOpdracht(id: any): Promise<Opdracht> {
    return Promise.resolve(OPDRACHTEN[id]);
  }
}
