import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  contents = [{}];

  @Output() deleteSectionEvent = new EventEmitter<number>();
  @Input() sectionId: number;
  

  

  constructor() { }

  ngOnInit(): void {
  }

  addContent(){
    this.contents.push(this.contents.length);
  }

  deleteSection(){
    this.deleteSectionEvent.emit(this.sectionId);
  }
}
