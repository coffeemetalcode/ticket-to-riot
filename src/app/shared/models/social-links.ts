export interface ISocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ISocialLinksHttpResponse {
  socialLinks: ISocialLink[];
}
