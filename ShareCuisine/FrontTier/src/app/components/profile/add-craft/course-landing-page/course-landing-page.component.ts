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

  landingPageForm:FormGroup;
  languages:Language[];
  levels: Level[];
  
  constructor(private craftForm: CraftFormService,private masterService:MasterService,private craftService:CraftService) { }

  ngOnInit(): void {

    this.masterService.getLanguage().subscribe(res => {
      this.languages=res;
    })

    this.masterService.getLevel().subscribe(res => {
      this.levels=res;
    })

    this.craftForm.craft.subscribe(res => {

    const languageSelection = res.courseLandingPage.basicInfo.language!= undefined ? new FormControl(res.courseLandingPage.basicInfo.language._id):new FormControl("");
    const levelSelection = res.courseLandingPage.basicInfo.level!= undefined ? new FormControl(res.courseLandingPage.basicInfo.level._id):new FormControl("");

    this.landingPageForm=new FormGroup({
      'courseTitle': new FormControl(res.courseLandingPage.courseTitle),
      'courseSubtitle': new FormControl(res.courseLandingPage.courseSubtitle),
      'courseDescription': new FormControl(res.courseLandingPage.courseDescription),
      'basicInfo': new FormGroup({
      'language': languageSelection,
      'level': levelSelection
      }),
      'courseImage': new FormControl(res.courseLandingPage.courseImage),
      'promotionalVideo': new FormControl(res.courseLandingPage.promotionalVideo)
    })
  

  
  
  }
    
    
    )
    
    

  }

  save(){

    this.craftForm.currentCraftValue.courseLandingPage=this.landingPageForm.value;

    this.craftService.updateCraftById(this.craftForm.currentCraftValue).subscribe(res=>{
      console.log("updated");
    });


  }

}
