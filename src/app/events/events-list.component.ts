import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from 'ngx-toastr'; 



@Component({
    selector: 'events-list',
    template: `
    <div>
       <h1>Upcomming Angular 8 Events</h1>
       <hr>
       <div class="row">
        <div  *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbbailClick(event.name)"
          [event]="event"></event-thumbnail>
        </div>
       </div>
       
   </div>
    `
})

export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService, private toastr: ToastrService) {
   
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbbailClick(eventName) {
    this.toastr.success(eventName);
  }
}