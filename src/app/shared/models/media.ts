export interface IMediaItem {
  id: string;
  title: string;
  type: string; // e.g. 'video' | 'audio' — drives filter buttons
  date: string; // ISO date string for sort
  embedUrl: string; // raw embed URL (YouTube, SoundCloud, etc.)
  description?: string;
  platform?: 'youtube' | 'soundcloud' | 'spotify';
}

export interface IMediaHttpResponse {
  media: IMediaItem[];
}
