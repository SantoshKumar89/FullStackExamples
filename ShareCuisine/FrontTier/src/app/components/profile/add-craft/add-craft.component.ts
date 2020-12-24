import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { NavbarServiceService } from './../../../services/navbar-service.service';
import { CraftService } from '../../../services/craft.service';
import {  ActivatedRoute, Router } from '@angular/router';
import { CraftFormService } from './craft-form.service'
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-craft',
  templateUrl: './add-craft.component.html',
  styleUrls: ['./add-craft.component.scss']
})
export class AddCraftComponent implements OnInit,OnDestroy {
  

  public craftCreated; boolean=false;
  public craftId: string;
  public canBePublished: boolean=false;
  public userId: string;
  queryPathSubscription: Subscription = new Subscription();
  craftServiceSubscription: Subscription = new Subscription();;
  craftFormSubscription: Subscription = new Subscription();;




  constructor(private nav: NavbarServiceService,
    private craftService: CraftService,
    private route: ActivatedRoute,
    private craftForm:CraftFormService,
    private router:Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {

    this.nav.show();
    this.queryPathSubscription=this.route.queryParams.subscribe(params => {
      this.craftForm.currentCraftValue._id = this.route.snapshot.paramMap.get('craftId');
      this.craftId=this.craftForm.currentCraftValue._id;
      this.userId= this.route.snapshot.paramMap.get('userId');
    });

    this.craftServiceSubscription=this.craftService.getCraftById(this.craftForm.currentCraftValue._id).subscribe(res => {
      this.craftForm.currentCraftValue = res;
      this.craftCreated=true;
    })

    //Mandatory check to Publish
    this.craftFormSubscription=this.craftForm.craft.subscribe(res => {

      try{
        if(res.title !== undefined &&
          res.curriculum.sections.length > 0 &&
          res.courseLandingPage.courseDescription !== undefined &&
          res.courseLandingPage.courseTitle !== undefined &&
          res.targetYourStudents.learn.answer.length > 0  && 
          res.targetYourStudents.prerequisites.answer.length > 0 &&
          res.targetYourStudents.target.answer.length > 0 
          ){

            this.canBePublished=true;
          }else{
            this.canBePublished=false;
          }


      }catch(e){

        this.canBePublished=false;

      }

    })
    
  }

  ngOnDestroy(): void {
  this.queryPathSubscription.unsubscribe();
  this.craftServiceSubscription.unsubscribe();
  this.craftFormSubscription.unsubscribe();
  }
  

 
  publish(){

    this.craftForm.currentCraftValue.publish = true;
    this.craftServiceSubscription=this.craftService.updateCraftById(this.craftForm.currentCraftValue).subscribe(res => {
      this.toastr.success('Published Successfully!!', 'Craft');
      const routeUrl=`/profile/${this.userId}`
      this.router.navigate([routeUrl]);
    })
   


  }

}
