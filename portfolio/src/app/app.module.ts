import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialComponent } from './social/social.component';

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
  bootstrap: [HeaderComponent, SkillsComponent]
})
export class AppModule { } 
