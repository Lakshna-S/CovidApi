import { Component } from '@angular/core';
import { CovidService } from './Service/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CovidAPI';
  countries:any
  country:any
  Confirmed:Number=0;
  Recovered:Number=0;
  Deaths:Number=0;
  Date:String='';
  Active:Number=0;
  Country:String='';
  TotalConfirmed:Number=0;
  TotalDeaths:Number=0;
  TotalRecovered:Number=0;

  constructor(private corona:CovidService){}

  ngOnInit(){
    this.corona.getCountries().subscribe((data:any)=>{
    console.log(data)
    this.countries = data
    })

    this.getworldtotal()
  }
  getCoronaData(){
    this.corona.getCoronaRealData(this.country).subscribe((data:any)=>{
      console.log(data)
      var index = data.length-1;
      for(var i=0;i<=index;i++)
      {
        this.Confirmed=this.Confirmed+data[i].Confirmed;
        this.Recovered=this.Recovered+data[i].Recovered;
        this.Deaths=this.Deaths+data[i].Deaths;
      }
      this.Date = data[index].Date
      this.Active = data[index].Active
      this.Country = data[index].Country

    })
  }

  getCountry(country:any){
    this.country = country
  }

  getworldtotal(){
    this.corona.getTotal().subscribe((data:any)=>{
      console.log(data)

      this.TotalConfirmed = data.TotalConfirmed
      this.TotalDeaths = data.TotalDeaths
      this.TotalRecovered = data.TotalRecovered
    })
  }
}
