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
    // TODO: try `allowFullscreen` again, and make ensure signals are used
    // throughout
  },
})
export class IframeLazy {
  readonly iframeTitle = input<string>('');
}
