import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  infogain = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.infogain1.subscribe(res => this.infogain = res);
    this._data.changeInfogain(this.infogain);
  }

}
