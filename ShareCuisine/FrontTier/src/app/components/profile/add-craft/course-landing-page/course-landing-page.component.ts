import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Language } from 'src/app/models/language';
import { Level } from 'src/app/models/level';
import { MasterService } from 'src/app/services/master.service';
import { CraftService } from '../../../../services/craft.service';
import { CraftFormService } from '../craft-form.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-course-landing-page',
  templateUrl: './course-landing-page.component.html',
  styleUrls: ['./course-landing-page.component.scss']
})
export class CourseLandingPageComponent implements OnInit,OnDestroy {
  

  landingPageForm: FormGroup;
  languages: Language[];
  levels: Level[];
  defaultLanguage: Language;
  defaultLevel: Level;
  craftFormSubscription: Subscription = new Subscription();;
  craftServiceSubscription: Subscription = new Subscription();;
  languageServiceSubscription: Subscription = new Subscription();;
  levelServiceSubscription: Subscription = new Subscription();;




  constructor(private toastr: ToastrService,private craftForm: CraftFormService, private masterService: MasterService, private craftService: CraftService) { }

  ngOnInit(): void {

   this.languageServiceSubscription= this.masterService.getLanguage().subscribe(res => {
      this.languages = res;

      this.defaultLanguage = res.filter(data => data.isDefault === true)[0];

      this.craftForm.craft.subscribe(res => {
        const languageSelection = this.landingPageForm.get('basicInfo').get('language');

        if (res.courseLandingPage != undefined && res.courseLandingPage.basicInfo != undefined && res.courseLandingPage.basicInfo.language != undefined)
          languageSelection.setValue(res.courseLandingPage.basicInfo.language._id)
        else {
          languageSelection.setValue(this.defaultLanguage._id)
        }
      })

    })

    this.levelServiceSubscription=this.masterService.getLevel().subscribe(res => {
      this.levels = res;

      this.defaultLevel = res.filter(data => data.isDefault === true)[0];
      this.landingPageForm.get('basicInfo').get('level').setValue(this.defaultLevel._id)

      this.craftForm.craft.subscribe(res => {

        const levelSelection = this.landingPageForm.get('basicInfo').get('level');

        if (res.courseLandingPage != undefined && res.courseLandingPage.basicInfo != undefined && res.courseLandingPage.basicInfo.language != undefined  )
          levelSelection.setValue(res.courseLandingPage.basicInfo.level._id)
        else {
          levelSelection.setValue(this.defaultLevel._id)
        }
      })


    })

    this.craftFormSubscription=this.craftForm.craft.subscribe(res => {


      this.landingPageForm = new FormGroup({
        'courseTitle': new FormControl((res.courseLandingPage !=undefined)? res.courseLandingPage.courseTitle:"Course title",Validators.required),
        'courseSubtitle': new FormControl((res.courseLandingPage !=undefined)?res.courseLandingPage.courseSubtitle:""),
        'courseDescription': new FormControl((res.courseLandingPage !=undefined)?res.courseLandingPage.courseDescription:"Course description",Validators.required),
        'basicInfo': new FormGroup({
          'language': new FormControl(""),
          'level': new FormControl("")
        }),
        'courseImage': new FormControl((res.courseLandingPage !=undefined)?res.courseLandingPage.courseImage:""),
        'promotionalVideo': new FormControl((res.courseLandingPage !=undefined)?res.courseLandingPage.promotionalVideo:"")
      })


    }


    )



  }

  save() {

    this.craftForm.currentCraftValue.courseLandingPage = this.landingPageForm.value;

    this.craftServiceSubscription=this.craftService.updateCraftById(this.craftForm.currentCraftValue).subscribe(res => {
      this.toastr.success('Updated','Course Landing Page')
      this.craftForm.currentCraftValue=this.craftForm.currentCraftValue;//Triggers next method
      
    });


  }

  ngOnDestroy(): void {
    this.craftFormSubscription.unsubscribe();
    this.craftServiceSubscription.unsubscribe();
    this.languageServiceSubscription.unsubscribe();
    this.levelServiceSubscription.unsubscribe()
  }

}
