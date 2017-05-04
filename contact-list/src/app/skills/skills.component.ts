import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  {
  skills = [{ name: 'Javascript', capability: '95' },
    { name: 'C#', capability: '90' },
    { name: 'HTML', capability: '80' }];
}
