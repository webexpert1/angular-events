import { Component } from '@angular/core';

@Component({
    selector: 'events-app',
    template: `
        <h2>Hello World</h2>
        <img src="/assets/images/ng-nl.png" />
    `,
    styleUrls: ['./app.component.css']
})

export class EventsAppComponent {
    title = 'Events Component'
}


