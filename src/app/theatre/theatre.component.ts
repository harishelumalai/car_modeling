import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AppContext } from 'app/appcontext.interface';
//import {  } from "app/AppContext";
//import {myinit, myanimate} from '../three_functions';

var ThreeFunctions = require('../three_functions.js')

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit, OnChanges {

  @Input() globalconfig1:AppContext;

  constructor() { 
  }

  ngOnInit() {
    
    console.log(this.globalconfig1);
    //Call init() function of three_functions.js
    console.log('Calling myinit()');
    ThreeFunctions.myinit();
    //Call animate() function
    console.log('Calling myanimate()');
    ThreeFunctions.myanimate();
  }

  ngOnChanges() {
    ThreeFunctions.CurrentGlobal = this.globalconfig1;
  }

}
