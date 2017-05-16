import { IRepository } from './../../models/repository';
import { GithubService } from '../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
  providers: [GithubService]
})
export class GithubComponent implements OnInit { 
  repositories: IRepository[]

  constructor(private githubService: GithubService) { }

  ngOnInit(){
    this.githubService.getRepositories().subscribe(result => { this.repositories = result.filter(function(repo){ return repo.fork == false; })});
  }
}
