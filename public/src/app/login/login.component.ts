import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  first_name = '';
  err = '';
  constructor(
    private _http: HttpService,
    private _cookieService: CookieService,
    private _router: Router,
  ) {}

  onSubmit(name, form){
    this._http.passName({name: name})
    .then( obj => {
      if (obj) {
        this._cookieService.put('userid', obj._id);
        this._cookieService.put('username', obj.name);
        this._router.navigate(['dashboard']);
      }
    })
    .catch ( err => {console.log(err);})
    form.resetForm();
  }

  ngOnInit() {
    if(this._cookieService.get('username')) {
      this._router.navigate(['dashboard']);
    }
  }

}
