import { Component, OnInit } from '@angular/core';
import {Regear} from "../../regear/regear";
import {RegearService} from "../../regear/regear-service.service";

@Component({
  selector: 'app-regear-list',
  templateUrl: './regear-list.component.html',
  styleUrls: ['./regear-list.component.css']
})
export class RegearListComponent implements OnInit {

  regears: Regear[];

  constructor(private regearService: RegearService) {
  }

  ngOnInit() {
    this.regearService.findAll().subscribe(data => {
      this.regears = data;
      console.log(data)
    });
  }

}
