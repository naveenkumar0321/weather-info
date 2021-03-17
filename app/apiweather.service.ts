import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiweatherService {

     
     
  constructor(private _http:HttpClient) { }

  dataget(data: string): Observable<any>{
   return  this._http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=864454684e0c56c960ac9555ac00425c`)
   
   .pipe(catchError(this.handleError))
   
  }

  handleError(error:HttpErrorResponse){
    return throwError(error.message || "server")
  }

}
