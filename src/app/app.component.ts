import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { WeatherService } from './service/weather.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode).subscribe(
      res => (this.weather = res),
      err => console.log(err)
    );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if(cityName.value && countryCode.value){
          this.getWeather(cityName.value, countryCode.value);
    cityName.value = "";
    countryCode.value = "";
    }else{
      alert('insert some values');
    }

    cityName.focus();
    return false;
  }
}
