import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { TheatreComponent } from './theatre/theatre.component';
//import * as ThreeFunctions from './three_functions';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    TheatreComponent
    //ThreeFunctions
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
