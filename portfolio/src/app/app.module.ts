import { SocialComponent } from './components/social/social.component';
import { GithubComponent } from './components/github/github.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    ContainerComponent,
    SocialComponent,
    GithubComponent,
    HeaderComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { } 
