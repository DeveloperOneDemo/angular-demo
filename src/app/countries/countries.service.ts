import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  allCountries: string[] = [];
  constructor() { 
    this.allCountries = ["America", "Japan", "India", "China"];
  }

  fetchAllCountries(): string[]{
    return this.allCountries;
  }

  deleteCountry(name: string): void{
    this.allCountries = this.allCountries.filter((item)=> item!=name);
  }

}
