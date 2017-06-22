import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'app/http.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent{
  topic_id = '';
  topics = {
    title: '',
    text: '',
    category: '',
    username: '',
    _user: '',
    count: 0
  }
  post = {
    text: '',
    _topic: '',
    _user: '',
  }
  posts = [];
  constructor(
    private _route: ActivatedRoute,
    private _cookieService: CookieService,
    private _http: HttpService,
  ) {
    this._route.params.subscribe((param) => {
      this._http.getTopicFromID(param.id)
      .then( obj => {
        this.topic_id = param.id;
        this.topics = obj[0];
        this._http.showTopic(this.topic_id)
        .then( data => {
          this.posts = data.posts;
        })
        .catch ( err => {console.log('some error');})
      })
      .catch ( err => {console.log(err);})
    })
  }

  onSubmit(post, form){
    post._topic = this.topic_id;
    post._user = this._cookieService.get('userid');
    this._http.passPost(post)
    .then( obj => {
      console.log(obj);
      form.resetForm();
      this._http.showTopic(this.topic_id)
        .then( data => {
          this.posts = data.posts;
        })
        .catch ( err => {console.log('some error');})
    })
    .catch ( err => {console.log(err);})
  }
}
