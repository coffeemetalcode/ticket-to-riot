import { Directive, input } from '@angular/core';

/**
 * Applied to iframe elements to set performance and security attributes.
 * Sets loading="lazy", referrerpolicy, allowfullscreen, and title.
 *
 * @example
 * <iframe appIframeLazy [iframeTitle]="item.title" [src]="sanitizedUrl" />
 */

@Directive({
  selector: 'iframe[appIframeLazy]',
  host: {
    loading: 'lazy',
    referrerpolicy: 'no-referrer-when-downgrade',
    '[attr.title]': 'iframeTitle()',
    '[attr.allowfullscreen]': 'allowFullscreen() ? "" : null',
  },
})
export class IframeLazy {
  readonly iframeTitle = input<string>('');
  readonly allowFullscreen = input<boolean>(true);
}
