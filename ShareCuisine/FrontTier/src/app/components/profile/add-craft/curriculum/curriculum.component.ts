import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  sections = [{}];


  constructor() { }

  ngOnInit(): void {
  }

  addSection(){
  this.sections.push(this.sections.length);

  }

  preview(){

  }

}
