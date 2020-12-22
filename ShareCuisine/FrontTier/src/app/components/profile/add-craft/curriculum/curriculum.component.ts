import { Component, OnInit, OnChanges } from '@angular/core';
import { CraftService } from '../../../../services/craft.service';
import { CraftFormService } from '../craft-form.service';
import { Section } from '../../../../models/craft'
import { Content } from '../../../../models/craft'


@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  sections: [Section];

  sectionId: number;

  constructor(private craftService: CraftService,
    private craftForm: CraftFormService) { }

  ngOnInit(): void {



  }

  addSection() {

    let section = new Section();
    section.contents = [new Content()]

    if (this.sections !== undefined) {
      this.sections.push(section);
    }
    else {
      this.sections = [section];
    }

  }

  addContent(section: Section) {
    section.contents.push(new Content());
  }


  preview() {

  }

  deleteSection(sectionId: number) {
    this.sections.splice(sectionId, 1);
  }


  showData() {
    console.log(this.sections);
  }

  deleteContent(sectionId:number,contentId: number){

    this.sections[sectionId].contents.splice(contentId,1)
  }

}
