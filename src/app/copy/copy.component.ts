import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent implements OnInit {

  text1 = "";
  text2 = "";

  constructor() { }

  ngOnInit(): void {
  }

  copyValue(){
    this.text2 = this.text1;
  }
}
