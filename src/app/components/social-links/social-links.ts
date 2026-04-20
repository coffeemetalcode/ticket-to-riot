import { Component, input } from '@angular/core';

import { ISocialLink } from '@riot-models';

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css',
})
export class SocialLinks {
  links = input<ISocialLink[]>();
}
