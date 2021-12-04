import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }

  getCountries():Observable<any>{
    const url = "https://api.covid19api.com/countries"
    return this.http.get<any>(url);
  }

  getCoronaRealData(country:string):Observable<any>{
    const url = "https://api.covid19api.com/total/country/"+ country
    return this.http.get<any>(url)
  }

  getTotal():Observable<any>{
  const url = "https://api.covid19api.com/world/total"
  return this.http.get<any>(url)
  }
}
