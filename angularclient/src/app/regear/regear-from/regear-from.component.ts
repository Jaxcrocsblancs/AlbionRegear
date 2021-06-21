import { Component } from '@angular/core';
import {Regear} from "../regear";
import {ActivatedRoute, Router} from "@angular/router";
import {RegearService} from "../../regear/regear-service.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-regear-from',
  templateUrl: './regear-from.component.html',
  styleUrls: ['./regear-from.component.css']
})
export class RegearFromComponent {

  regear: Regear;
  send: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private regearService: RegearService) {
    this.regear = new Regear();
    this.regear.image = null;
  }

  onSubmit(form: NgForm) {
    this.regear.url = "https://albiononline.com/fr/killboard/kill/258103951"
    this.regearService.save(this.regear).subscribe(result => this.gotoRegearList());
    form.resetForm();
    this.send = true;
  }

  gotoRegearList() {
    this.router.navigate(['/regear/demand']);
}


}
