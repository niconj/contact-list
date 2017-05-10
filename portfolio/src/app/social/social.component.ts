import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
   networks = [{ name: 'Linkedin', icon: '', link:'https://www.linkedin.com/in/nicol%C3%A1s-jerem%C3%ADas-0b289019/' },
               { name: 'Github',   icon: '', link:'https://github.com/niconj' },
               { name: 'Twitter',  icon: '', link:'https://twitter.com/nico_nj' },
               { name: 'Mail',     icon: '', link:'' },
               { name: 'Facebook', icon: '', link:'' }];
}
