import { Component, EventEmitter, OnInit, OnChanges, Input, Output } from '@angular/core';
import { AppContext } from 'app/appcontext.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnChanges {

  @Input() globalconfig:AppContext;

  @Output() config_change_event:EventEmitter<AppContext> = new EventEmitter<AppContext>();

  firsttime: boolean = true;
  

  constructor() { }

  ngOnInit() {
    //Use allsettings variable to generate the dynamic form
  }

  ngOnChanges(changes: { [propName: string]: any }) {
    if( this.firsttime)
    {
      //Get all settings information from server at start
      console.log('firsttime');
      this.firsttime = !this.firsttime;
    }
    else
    {
      //Send updated config details to Parent.
      console.log('settings. ngonchanges(). value changed');
      this.colorChanged(0);
    }
  }

  colorChanged(ev)
  {
    console.log(this.globalconfig.current_appconfig[0].value);
    this.config_change_event.emit(this.globalconfig);
  }

}
