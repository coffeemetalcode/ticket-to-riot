import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ILiveEventsHttpResponse, ISocialLinksHttpResponse } from '@riot-models';

@Injectable({
  providedIn: 'root',
})
export class GhData {
  readonly #http = inject(HttpClient);

  readonly #repoUrl =
    'https://raw.githubusercontent.com/coffeemetalcode/ticket-to-riot/refs/heads/data/public/data';
  readonly #socialLinksUrl = `${this.#repoUrl}/social.json`;
  readonly #scheduleUrl = `${this.#repoUrl}/live.json`;

  public getSocialLinks(): Observable<ISocialLinksHttpResponse> {
    return this.#http.get<any>(this.#socialLinksUrl);
  }

  public getSchedule(): Observable<ILiveEventsHttpResponse> {
    return this.#http.get<any>(this.#scheduleUrl);
  }
}
