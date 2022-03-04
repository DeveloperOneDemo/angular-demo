import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {

  allCountries: string[] = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.allCountries = this.countriesService.fetchAllCountries();
  }

  deleteInParent($event: any){
    console.log($event);
    // this is where we should delete the country from the array through the service
    this.countriesService.deleteCountry($event);
    this.allCountries = this.countriesService.fetchAllCountries();
  }

}
