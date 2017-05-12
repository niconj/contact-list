import { GithubService } from './../../services/github.service';
import { Component } from '@angular/core';
import { SocialService } from '../../services/social.service'

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  providers: [SocialService]
})

export class SocialComponent {
   networks = [];
 
   constructor(private socialService: SocialService){
    this.networks = socialService.getSocialNetworks();
   }
}