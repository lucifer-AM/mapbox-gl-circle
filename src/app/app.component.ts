import { Component } from '@angular/core';
declare function require(name: string);
const MapboxDraw = require('@mapbox/mapbox-gl-draw');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  map;

  onMapLoad(map) {
    this.map = map;
    const Draw = new MapboxDraw();
    console.log(Draw);
    console.log(this.map);
    this.map.addControl(Draw, 'top-left');
  }
}
