import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="card card-body thumbnail mb-3">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngStyle]=" getStartTimeStyle()" [ngSwitch]="event?.time">Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
       
        <div>Price: \${{event?.price}}</div>
        <div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location.address}}</span>
            <span class="pad-left">{{event?.location.city}}, {{event.location.country}}</span>
        </div>
           <div *ngIf="event?.onlineUrl">Online URL: {{ event?.onlineUrl}} </div>
        </div>
    <div>
    `,
    styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    `]

})

export class EventsThumbnailComponent {
    @Input() event : any;

    getStartTimeClass() {
        // const isEarlyStart = this.event && this.event.time === '8:00 am'; [ngClass]
        // return {green: isEarlyStart, bold: isEarlyStart};

        if(this.event && this.event.time === '8:00 am') {
            return ['green' , 'bold'];
        }
    }

    getStartTimeStyle(): any {
        if(this.event && this.event.time === '8:00 am') {
            return {color: '#003300' , 'font-weight': 'bold'};
        }
        return {};
    }
   
}