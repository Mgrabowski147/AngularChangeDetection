import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Behavior } from 'popper.js';
import { BehaviorSubject, Observable } from 'rxjs';
import { Example } from './training/example.enum';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public exampleNo: BehaviorSubject<Example>;

  public sharedNumber: number = 0;
  public sharedObservableNumber: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public forecasts: WeatherForecast;
  private forecastIndex: number = 0;
  

  constructor(private httpClient: HttpClient) { }

  fetchData() {
    this.httpClient.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
      this.forecastIndex = (this.forecastIndex+1)%result.length;
      this.forecasts = result[this.forecastIndex];
    }, error => console.error(error));
          
  }

  reset() {
    this.sharedNumber = 0;
    this.sharedObservableNumber.next(0);
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
