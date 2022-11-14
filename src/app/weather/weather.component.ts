import { Component, OnInit } from '@angular/core';
import { TracercoApiWeatherForecastService } from '../services/tracerco-api';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherForecastService: TracercoApiWeatherForecastService) { }

  ngOnInit(): void {
    // TODO: Get weather forecast here
    // this.weatherForecastService.weatherForecastGetWeatherForecastGet$Plain().subscribe(result => console.log(result));
  }

}
