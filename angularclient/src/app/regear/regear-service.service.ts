import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Regear} from "./regear";

@Injectable()
export class RegearService {

  private regearsUrl: string;

  constructor(private http: HttpClient) {
    this.regearsUrl = 'http://localhost:8080/regear';
  }

  public findAll(): Observable<Regear[]> {
    return this.http.get<Regear[]>(this.regearsUrl);
  }

  public save(regear: Regear) {
    console.log(regear)
    return this.http.post<Regear>(this.regearsUrl, regear);
  }
}
