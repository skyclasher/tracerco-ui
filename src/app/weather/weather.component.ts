import { Component, OnInit } from '@angular/core';
import { TracercoApiWeatherForecast, TracercoApiWeatherForecastService } from '../services/tracerco-api';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherForecastService: TracercoApiWeatherForecastService) { }

  weatherList: TracercoApiWeatherForecast[] = [];

  ngOnInit(): void {
    // TODO: Get weather forecast here
    this.weatherForecastService.weatherForecastGetWeatherForecastGet$Plain().subscribe(result => {
      this.weatherList = result;
      console.log(result);
    });
  }

}
