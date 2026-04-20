import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GhData {
  public readonly repoUrl =
    'https://raw.githubusercontent.com/coffeemetalcode/ticket-to-riot/refs/heads/data/public/data';
  public readonly socialLinksUrl = `${this.repoUrl}/social.json`;

  public getSocialLinks(): Promise<any> {
    return fetch(this.socialLinksUrl).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch social links: ${response.statusText}`);
      }
      return response.json();
    });
  }
}
