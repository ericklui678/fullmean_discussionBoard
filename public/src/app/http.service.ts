import { CookieService } from 'angular2-cookie/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(
    private _http: Http,
    private _cookieService: CookieService,
  ) { }
  passName(name) {
    return this._http.post('/name', name)
    .map( data => data.json() )
    .toPromise();
  }
  passTopic(topic) {
    return this._http.post('/topic', topic)
    .map( data => data.json() )
    .toPromise();
  }
  getTopic() {
    console.log('Getting topics from service');
    return this._http.get('/topics/show')
    .map( data => data.json() )
    .toPromise();
  }
  getTopicFromID(topic_id){
    return this._http.get('/topic/' + topic_id)
    .map( data => data.json() )
    .toPromise();
  }
  passPost(post) {
    return this._http.post('/post', post)
    .map( data => data.json() )
    .toPromise();
  }
  showTopic(topic_id) {
    return this._http.get('/topicAll/' + topic_id)
    .map( data => data.json() )
    .toPromise();
  }
  //   create(quote) {
  //   console.log('SERVICE DATA PARAM', quote);
  //   return this._http.post('/new', quote)
  //   .map ( data => data.json() )
  //   .toPromise();
  // }
  // retrieve() {
  //   console.log('SERVICE RETRIEVE');
  //   return this._http.get('/notes')
  //   .map ( data => data.json() )
  //   .toPromise();
  // }
}
