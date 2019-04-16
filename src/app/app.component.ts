import { Component, OnChanges } from '@angular/core';
import { APPSTATE } from './appstate.enum';
import { AppContext } from './appcontext.interface';

var reqglobal = require('./three_functions.js');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{

  GlobalConfig:AppContext = {
    "current_appstate": APPSTATE.IDLE_STATE,
    "current_appconfig": [
      {"name":"body_color", "value": "RED"}
      //{"name":"head_light_type","value":"type2"}
    ]
  };

  globalChanged(outglobal:AppContext):void
  {
    console.log('globalconfig1.');
    
    //GlobalConfig = outglobal;
    reqglobal.CurrentGlobal = outglobal;

    console.log(outglobal.current_appconfig[0].value + "==" + reqglobal.CurrentGlobal.current_appconfig[0].value);

    if(reqglobal.CurrentGlobal.current_appconfig[0].value == "RED")
      reqglobal.mymodel.material = reqglobal.materials[0];
    else if(reqglobal.CurrentGlobal.current_appconfig[0].value == "GREEN")
      reqglobal.mymodel.material = reqglobal.materials[1];
    else if(reqglobal.CurrentGlobal.current_appconfig[0].value == "BLUE")
      reqglobal.mymodel.material = reqglobal.materials[2];
    
      //reqglobal.CurrentGlobal.current_appstate = 1;
  }

  ngOnChanges() {
    console.log('globalconfig.');
    console.log(this.GlobalConfig);
  }
}
