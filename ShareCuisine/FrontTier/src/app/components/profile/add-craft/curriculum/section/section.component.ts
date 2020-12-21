import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  contents = [{}];


  constructor() { }

  ngOnInit(): void {
  }

  addContent(){
    console.log("hi")
    this.contents.push(this.contents.length);
  }

}
