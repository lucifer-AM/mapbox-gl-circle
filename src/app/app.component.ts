import { Component, AfterViewInit } from '@angular/core';
declare function require(name: string);
import mapBox = require('mapbox-gl');
import mapBoxDraw = require('@mapbox/mapbox-gl-draw');
import mapboxCircle = require('mapbox-gl-circle');
// tslint:disable-next-line:max-line-length
mapBox.accessToken = 'pk.eyJ1IjoiYmxhemVjbGFuIiwiYSI6ImNqOWZxM3h1MzAzMW8zMnJxd3g0NzZ5a20ifQ.5IdwsnKmxrQftgM-3-P5IA#11.0/50.839325/4.347952/0';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  map;
  coordinates: HTMLElement;
  myCircle = new mapboxCircle({ lat: 39.984, lng: -75.343 }, 150, {
    editable: false,
    maxRadius: 150,
    fillColor: '#29AB87'
  });
  marker = new mapBox.Marker();
  draw = new mapBoxDraw({
    displayControlsDefault: false,
    controls: {
      polygon: true,
      trash: true
    }
  });

  ngAfterViewInit() {
    this.map = new mapBox.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v8', // stylesheet location
      center: [-74.50, 40], // starting position
      zoom: 9 // starting zoom
    });

    this.marker.setLngLat([-75.343, 39.984]).addTo(this.map);
    this.map.on('click', (e) => {
      this.marker.setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(this.map);
      this.myCircle.setCenter({ lat: e.lngLat.lat, lng: e.lngLat.lng }).setRadius(150).addTo(this.map);
    });

    // this.map.addControl(this.draw);
  }

  dragend() {

  }

  /*  onMapLoad(map) {
     this.map = map;
     const Draw = new mapBoxDraw();
     console.log(Draw);
     console.log(this.map);
     this.map.addControl(Draw, 'top-left');
   } */
}
