import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NavComponent } from './nav/nav.component';
import { CockpitComponent } from './cockpit/cockpit.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NavComponent,
    CockpitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
