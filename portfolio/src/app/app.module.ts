import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SkillsComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HeaderComponent, SkillsComponent, SocialComponent]
})
export class AppModule { } 
