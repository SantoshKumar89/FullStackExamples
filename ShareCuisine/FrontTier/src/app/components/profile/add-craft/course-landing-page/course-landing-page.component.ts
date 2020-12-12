import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Language } from 'src/app/models/language';

@Component({
  selector: 'app-course-landing-page',
  templateUrl: './course-landing-page.component.html',
  styleUrls: ['./course-landing-page.component.scss']
})
export class CourseLandingPageComponent implements OnInit {

  landingPageForm:FormGroup;
  languages:Language[] = [{locale:'en_US',name:"English (US)"},{locale:'en_UK',name:"English (UK)"},{locale:'en_IN',name:"English (India)"}];

  constructor() { }

  ngOnInit(): void {

    this.landingPageForm=new FormGroup({
      'courseTitle': new FormControl("courseTitle"),
      'courseSubtitle': new FormControl("courseSubtitle"),
      'courseDescription': new FormControl("courseDescription"),
      'basicInfo': new FormGroup({
      'language': new FormControl(""),
      'level': new FormControl("")
      }),
    })
  }

  save(){

    console.log("hi"+
    JSON.stringify(this.landingPageForm.value));
  }

}
