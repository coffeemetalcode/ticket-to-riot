import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GhData {
  readonly #http = inject(HttpClient);

  public readonly repoUrl =
    'https://raw.githubusercontent.com/coffeemetalcode/ticket-to-riot/refs/heads/data/public/data';
  public readonly socialLinksUrl = `${this.repoUrl}/social.json`;

  public getSocialLinks(): Observable<any> {
    return this.#http.get<any>(this.socialLinksUrl);
  }
}
