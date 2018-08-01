import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgxMapboxGLModule.forRoot({
      accessToken: 'pk.eyJ1IjoiYmxhemVjbGFuIiwiYSI6ImNqOWZxM3h1MzAzMW8zMnJxd3g0NzZ5a20ifQ.5IdwsnKmxrQftgM-3-P5IA#11.0/50.839325/4.347952/0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
