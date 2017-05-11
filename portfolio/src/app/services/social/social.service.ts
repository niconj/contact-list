import { Injectable } from '@angular/core';

@Injectable()
export class SocialService {
  socialNetworks = [];

  getSocialNetworks() { return this.socialNetworks; }

  constructor() { 
    this.socialNetworks = [{ name: 'Linkedin', icon: '../../assets/icons/svg/linkedin-round.svg', link:'https://www.linkedin.com/in/nicol%C3%A1s-jerem%C3%ADas-0b289019/' },
               { name: 'Github',   icon: '../../assets/icons/svg/github-round.svg', link:'https://github.com/niconj' },
               { name: 'Twitter',  icon: '../../assets/icons/svg/twitter-round.svg', link:'https://twitter.com/nico_nj' },
               { name: 'Mail',     icon: '../../assets/icons/svg/mail-round.svg', link:'' },
               { name: 'Facebook', icon: '../../assets/icons/svg/facebook-round.svg', link:'https://www.facebook.com/nicolas.jeremias.39' }];
  }

}
