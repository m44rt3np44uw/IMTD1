import {Injectable} from "@angular/core";
import {Opdracht} from "./opdracht";
import {OPDRACHTEN} from "./opdrachten.mock";

@Injectable()
export class OpdrachtenService {

  getOpdracht(id: any): Promise<Opdracht> {
    return Promise.resolve(OPDRACHTEN[id]);
  }
}
