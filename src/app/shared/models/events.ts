export interface ILiveEvent {
  eventName: string;
  date: string;
  venue: string;
  locationLabel: string;
  locationAddress: string;
  locationNavLink: string;
  doors: string;
  show: string;
  ticketLink?: string;
}

export interface ILiveEventsHttpResponse {
  live: ILiveEvent[];
}
