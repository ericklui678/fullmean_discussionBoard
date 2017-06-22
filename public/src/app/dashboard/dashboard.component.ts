import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topics = [];

  name = this._cookieService.get('username');
  userid = this._cookieService.get('userid');
  topic_obj = {
    title: '',
    text: '',
    category: '',
    username: '',
    _user: ''
  }
  
  constructor(
    private _cookieService: CookieService,
    private _http: HttpService,
    private _router: Router,
  ) { }

  onSubmit(topic, form){
    topic._user = this.userid;
    this._http.passTopic(topic)
    .then( obj => {
      form.resetForm();
      this._http.getTopic()
      .then( obj => {
        this.topics = obj;
      })
      .catch( err => { console.log(err);})
    })
    .catch( err => { console.log(err);})
  }

  logout(){
    this._cookieService.remove('username');
    this._router.navigate(['']);
  }

  ngOnInit() {
    if (!this._cookieService.get('username')){
      this._router.navigate(['']);
    }
    this._http.getTopic()
    .then( obj => {
      this.topics = obj;
    })
    .catch( err => { console.log(err);})
  }
}
