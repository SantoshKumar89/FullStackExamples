import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CraftService } from '../../../../services/craft.service';
import { CraftFormService } from '../craft-form.service';
import { Section } from '../../../../models/craft'
import { Content } from '../../../../models/craft'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit,OnDestroy {
  

  craftPreviewRoute:string;
  detailsForm: FormGroup;
  sections: [Section];
  currentModalDetails: {
    contentIndex: number,
    sectionIndex: number,
    contentTitle: string,
    sectionTitle: string
  } = { contentIndex: 0, sectionIndex: 0, contentTitle: "", sectionTitle: "" };
  craftFormSubscription: Subscription = new Subscription();;
  craftServiceSubscription: Subscription = new Subscription();;



  constructor(private craftService: CraftService,
    private craftForm: CraftFormService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.craftFormSubscription=this.craftForm.craft.subscribe(res => {
      this.sections = res.curriculum.sections;
      this.craftPreviewRoute=`craft/${res._id}`;
    })

    this.detailsForm = new FormGroup({
      'title': new FormControl(),
      'content': new FormGroup({
        'embed': new FormGroup({
          'url': new FormControl("")
        }),
        'upload': new FormGroup({
          'location': new FormControl("")
        })
      }
      ),
      'description': new FormControl(),
      'resources': new FormControl()
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
    this.router.navigate(['/craft/1']);

  }

  deleteSection(sectionId: number) {
    this.sections.splice(sectionId, 1);

  }


  save() {
    this.craftForm.currentCraftValue.curriculum.sections = this.sections;
    this.craftServiceSubscription=this.craftService.updateCraftById(this.craftForm.currentCraftValue).subscribe(res => {
      this.toastr.success('Updated', 'Curriculum');
      this.craftForm.currentCraftValue=this.craftForm.currentCraftValue;//Triggers next method
    })
  }

  deleteContent(sectionId: number, contentId: number) {
    this.sections[sectionId].contents.splice(contentId, 1)

  }

  loadModal(section: number, content: number) {
    this.currentModalDetails.contentIndex = content;
    this.currentModalDetails.sectionIndex = section;

    let currentContentObject = this.sections[this.currentModalDetails.sectionIndex].contents[this.currentModalDetails.contentIndex];
    this.currentModalDetails.contentTitle = currentContentObject.title;
    this.currentModalDetails.sectionTitle = this.sections[this.currentModalDetails.sectionIndex].title;

    let contentObject = currentContentObject.content;
    let url = contentObject != undefined ? contentObject.embed.url : "";

    this.detailsForm = new FormGroup({
      'title': new FormControl(currentContentObject.title),
      'content': new FormGroup({
        'embed': new FormGroup({
          'url': new FormControl(url,Validators.required)
        }),
        'upload': new FormGroup({
          'location': new FormControl("")
        })
      }
      ),
      'description': new FormControl(currentContentObject.description),
      'resources': new FormControl("")
    })

  }

  saveModal() {
    this.sections[this.currentModalDetails.sectionIndex].contents[this.currentModalDetails.contentIndex] = this.detailsForm.value;
    this.save();
  }

  ngOnDestroy(): void {
    this.craftFormSubscription.unsubscribe();
    this.craftServiceSubscription.unsubscribe();
  }

}
