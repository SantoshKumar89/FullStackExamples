import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 
import { Content } from '../../../../../models/craft'


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit{
 

  contents:[Content] = [new Content()];

  @Output() deleteSectionEvent = new EventEmitter<number>();
  @Input() sectionId: number;
  

  
  constructor() { }

  ngOnInit(): void {

    
  }

  addContent(){
    this.contents.push(new Content());
  }

  deleteSection(){
    this.deleteSectionEvent.emit(this.sectionId);
  }
}
