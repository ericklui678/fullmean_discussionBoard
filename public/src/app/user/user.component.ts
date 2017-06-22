import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  user = {
    name: '',
    tCount: 0,
    pCount: 0,
    cCount: 0,
  }

  constructor(
    private _http: HttpService,
    private _router: ActivatedRoute,
  ) {
    this._router.params.subscribe((param) => {
      console.log(param.id);
      this._http.getUserInfo(param.id)
      .then (obj => {
        this.user = obj[0];
      })
      .catch (err => { console.log(err); })
    })
  }


}
