import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  getRepositories() {
    return this.http.get('https://api.github.com/users/niconj/repos')
               .map(result => result.json());
  }
}
