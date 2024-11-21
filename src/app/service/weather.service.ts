import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  ApiKey: string = 'a61c115c7947855a7641f821d581ae65';
  URI: string = '';

  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.ApiKey}&units=metric&q=`;
  }

  getWeather(cityName: string, countryCode: string) {
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`);
  }
}
