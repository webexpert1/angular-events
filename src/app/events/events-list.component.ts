import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from 'ngx-toastr'; 
import { ActivatedRoute } from '@angular/router';



@Component({
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
  events: any;

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
   
  }

  ngOnInit() {
   this.events = this.route.snapshot.data['events'];
  }

  handleThumbbailClick(eventName) {
    this.toastr.success(eventName);
  }
}