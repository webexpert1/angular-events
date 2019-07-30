import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { EventsAppComponent } from './events-app.components';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastService } from './common/toastr.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [EventService, ToastService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
