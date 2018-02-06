import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  infogain : any;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.infogain1.subscribe(res => this.infogain = res);
  }

}
