import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx'

/**
 * Created by Gowtham Chandrasekar on 25-03-2017.
 */

@Injectable()
export class GithubService {
  private username: string;

  constructor(private _http:Http){
    console.log('Github Service Ready...');
    this.username = 'androidsources';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username)
      .map(res => res.json())
  }

}
