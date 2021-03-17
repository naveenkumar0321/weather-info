import { Component } from '@angular/core';
import { ApiweatherService } from './apiweather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherapp';
  info:any;
  data:string
  error:string
  constructor(private _api:ApiweatherService){}

  getdata(){
    this._api.dataget(this.data).subscribe((data)=>{
      this.info =data
    },(error)=>{
      this.error = error
    })
    

  }
  
}
