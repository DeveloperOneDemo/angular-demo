import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-display-country',
  templateUrl: './display-country.component.html',
  styleUrls: ['./display-country.component.css']
})
export class DisplayCountryComponent implements OnInit {

  @Input() countryInfo: string = "";
  // event emitter created for the button click event   
  @Output() deleteEvent: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete(name:string){
    // do not delete here, emit this event to the parent component 
          //and let the parent component delete the country

    this.deleteEvent.emit(name); // here we are emitting the event ot the parent component 
                                  //and passing the country name as well
  }
}
