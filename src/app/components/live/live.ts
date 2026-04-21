import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';

import { ILiveEvent } from '@riot-models';
import { GhData } from '@riot-services';

@Component({
  selector: 'app-live',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './live.html',
  styleUrl: './live.css',
})
export class Live implements OnInit {
  readonly #ghDataService = inject(GhData);
  protected liveEvents = signal<ILiveEvent[]>([]);

  ngOnInit(): void {
    this.#ghDataService.getSchedule().subscribe((data) => {
      this.liveEvents.set(data.live);
    });
  }
}
