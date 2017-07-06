import { Component } from '@angular/core';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2';
  constructor() {
    console.log(VERSION.full); // print 2.3.0-rc.0
  }
}



