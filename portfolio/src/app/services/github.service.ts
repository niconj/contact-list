import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {
  repositories = [];

  getRepositories() { return this.repositories; }

  constructor(http: Http) { 
    http.get('https://api.github.com/users/niconj/repos')
        .subscribe(result => this.repositories = result.json());
  }
}
