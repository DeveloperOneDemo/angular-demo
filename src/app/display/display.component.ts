import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  movieName: string = "";
  toggle: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showName(){
    if(this.toggle){
      this.movieName = "Avengers: End Game";
      this.toggle = false;
    }else{
      this.movieName = "";
      this.toggle = true;
    }
    
  }
}
