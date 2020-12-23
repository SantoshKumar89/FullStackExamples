import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Language } from 'src/app/models/language';
import { Level } from 'src/app/models/level';
import { MasterService } from 'src/app/services/master.service';
import { CraftService } from '../../../../services/craft.service';
import { CraftFormService } from '../craft-form.service'

@Component({
  selector: 'app-course-landing-page',
  templateUrl: './course-landing-page.component.html',
  styleUrls: ['./course-landing-page.component.scss']
})
export class CourseLandingPageComponent implements OnInit {

  landingPageForm: FormGroup;
  languages: Language[];
  levels: Level[];
  defaultLanguage: Language;
  defaultLevel: Level;


  constructor(private craftForm: CraftFormService, private masterService: MasterService, private craftService: CraftService) { }

  ngOnInit(): void {

    this.masterService.getLanguage().subscribe(res => {
      this.languages = res;

      this.defaultLanguage = res.filter(data => data.isDefault === true)[0];

      this.craftForm.craft.subscribe(res => {
        const languageSelection = this.landingPageForm.get('basicInfo').get('language');

        if (res.courseLandingPage.basicInfo != undefined)
          languageSelection.setValue(res.courseLandingPage.basicInfo.language._id)
        else {
          languageSelection.setValue(this.defaultLanguage._id)
        }
      })

    })

    this.masterService.getLevel().subscribe(res => {
      this.levels = res;

      this.defaultLevel = res.filter(data => data.isDefault === true)[0];
      this.landingPageForm.get('basicInfo').get('level').setValue(this.defaultLevel._id)

      this.craftForm.craft.subscribe(res => {

        const levelSelection = this.landingPageForm.get('basicInfo').get('level');

        if (res.courseLandingPage.basicInfo != undefined)
          levelSelection.setValue(res.courseLandingPage.basicInfo.level._id)
        else {
          levelSelection.setValue(this.defaultLevel._id)
        }
      })


    })

    this.craftForm.craft.subscribe(res => {


      const levelSelection = (res.courseLandingPage.basicInfo != undefined) ? new FormControl(res.courseLandingPage.basicInfo.level._id) : new FormControl("");



      this.landingPageForm = new FormGroup({
        'courseTitle': new FormControl(res.courseLandingPage.courseTitle),
        'courseSubtitle': new FormControl(res.courseLandingPage.courseSubtitle),
        'courseDescription': new FormControl(res.courseLandingPage.courseDescription),
        'basicInfo': new FormGroup({
          'language': new FormControl(""),
          'level': new FormControl("")
        }),
        'courseImage': new FormControl(res.courseLandingPage.courseImage),
        'promotionalVideo': new FormControl(res.courseLandingPage.promotionalVideo)
      })




    }


    )



  }

  save() {

    this.craftForm.currentCraftValue.courseLandingPage = this.landingPageForm.value;

    this.craftService.updateCraftById(this.craftForm.currentCraftValue).subscribe(res => {
      console.log("updated");
    });


  }

}
