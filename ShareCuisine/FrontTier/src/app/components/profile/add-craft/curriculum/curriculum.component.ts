import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit,OnChanges {

  sections = [0];


  constructor() { }

  ngOnInit(): void {
  }

  addSection(){
  this.sections.push(this.sections.length);

  }

  preview(){

  }

  deleteSection(sectionId:number){
    this.sections.splice(sectionId, 1);
  }

  ngOnChanges(changes: SimpleChanges)	{
    console.log("hi");
  }


}
