import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-fruit',
  templateUrl: './list-fruit.component.html',
  styleUrls: ['./list-fruit.component.css']
})
export class ListFruitComponent implements OnInit {

  allFruits = ["Apples", "Oranges", "Bananas"];

  constructor() { }

  ngOnInit(): void {
  }

}
