import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private infogain = new BehaviorSubject<any>(['The Initial Stage', 'The Midile Stage', 'The Final Stage']);

  infogain1 = this.infogain.asObservable()

  constructor() { }

  changeInfogain(infogain1) {
    this.infogain.next(infogain1);
  }

}
