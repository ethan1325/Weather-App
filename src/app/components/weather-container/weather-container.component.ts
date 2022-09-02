import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/Weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements OnInit {

  weatherData?: WeatherData;
  cityName: string = "Jakarta ";

  constructor(private weatherservice: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  private getWeatherData(cityName: string){
    this.weatherservice.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;  
      }
    })
  }

}

