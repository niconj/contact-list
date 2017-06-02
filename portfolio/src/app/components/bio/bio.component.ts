import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {
  bio = 'asdasd';
  constructor() { 
    this.bio = 'Hi! Im student, gamer and full-stack web developer located in Argentina. I work mainly with .Net technologies, javascript and Angular';
  }

}