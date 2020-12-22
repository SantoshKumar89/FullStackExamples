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
  detailsModal: {
    content: Content,
    section: Section
  } = { content: new Content(), section: new Section };

  constructor(private craftService: CraftService,
    private craftForm: CraftFormService) { }

  ngOnInit(): void {
    this.craftForm.craft.subscribe(res => {
      this.sections = res.curriculum.sections;
    })

  }

  addSection() {

    let section = new Section();
    let content = new Content();
    content.title = "Content 1";//First content object
    section.contents = [content];

    if (this.sections !== undefined) {
      section.title = `Section ${this.sections.length + 1}`
      this.sections.push(section);
    }
    else {
      section.title = `Section 1`
      this.sections = [section];
    }

  }

  addContent(section: Section) {

    let content = new Content();
    let countContent = section.contents != undefined ? (section.contents.length + 1) : 1;
    content.title = `Content ${countContent}`

    section.contents.push(content);
  }



  preview() {
    this.save();
  }

  deleteSection(sectionId: number) {
    this.sections.splice(sectionId, 1);
  }


  save() {
    this.craftForm.currentCraftValue.curriculum.sections = this.sections;
    this.craftService.updateCraftById(this.craftForm.currentCraftValue).subscribe(res => {
      console.log("updated successfully")
    })
  }

  deleteContent(sectionId: number, contentId: number) {
    this.sections[sectionId].contents.splice(contentId, 1)
  }

  loadModal(content: Content,section: Section) {
    this.detailsModal.content = content;
    this.detailsModal.section = section;
    console.log(this.detailsModal)
  }
}
