import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { CraftFormService } from '../craft-form.service'
import { CraftService } from '../../../../services/craft.service';
import { element } from 'protractor';

@Component({
  selector: 'app-target-your-students',
  templateUrl: './target-your-students.component.html',
  styleUrls: ['./target-your-students.component.scss']
})
export class TargetYourStudentsComponent implements OnInit {


  targetYourStudents: FormGroup;


  constructor(private craftForm: CraftFormService,private craftService:CraftService) { }

  ngOnInit(): void {

    this.craftForm.craft.subscribe(res => {

      let learnFormControl: [AbstractControl]=[new FormControl("")];
      let prerequisitesFormControl: [AbstractControl]=[new FormControl("")];
      let targetFormControl: [AbstractControl]=[new FormControl("")];

      if(res.targetYourStudents != undefined && res.targetYourStudents.learn != undefined){
        learnFormControl.pop();
        res.targetYourStudents.learn.answer.forEach(element => {
          learnFormControl.push(new FormControl(element))
        });
      }
      if(res.targetYourStudents != undefined && res.targetYourStudents.prerequisites != undefined){
        prerequisitesFormControl.pop();

        res.targetYourStudents.prerequisites.answer.forEach(element =>{
          prerequisitesFormControl.push(new FormControl(element));
        })       
      }

      if(res.targetYourStudents != undefined && res.targetYourStudents.target != undefined){
        targetFormControl.pop();

        res.targetYourStudents.target.answer.forEach(element => {
          targetFormControl.push(new FormControl(element))
        })
      }
      

      this.targetYourStudents = new FormGroup({
        'learn': new FormGroup({
          'answer': new FormArray(learnFormControl)
        }),
        'prerequisites': new FormGroup({
          'answer': new FormArray(prerequisitesFormControl)
        }),
        'target': new FormGroup({
          'answer': new FormArray(targetFormControl)
        })
      })
    })
  }

  save() {
    console.log(this.targetYourStudents.value);
    this.craftForm.currentCraftValue.targetYourStudents = this.targetYourStudents.value;
    this.craftService.updateCraftById(this.craftForm.currentCraftValue).subscribe(res => {
    })

  }

  addAnswerToLearn() {
    const control = new FormControl("", Validators.required);
    (<FormArray>this.targetYourStudents.get('learn').get('answer')).push(control);
  }

  removeAnswerToLearn() {
    let targetYourStudentsArray = <FormArray>this.targetYourStudents.get('learn').get('answer');
    targetYourStudentsArray.removeAt(targetYourStudentsArray.length - 1);
  }

  addAnswerToPrerequisites() {
    const control = new FormControl("", Validators.required);
    (<FormArray>this.targetYourStudents.get('prerequisites').get('answer')).push(control);
  }

  removeAnswerToPrerequisites() {
    let targetYourStudentsArray = <FormArray>this.targetYourStudents.get('prerequisites').get('answer');
    targetYourStudentsArray.removeAt(targetYourStudentsArray.length - 1);
  }


  addAnswerToTarget() {
    const control = new FormControl("", Validators.required);
    (<FormArray>this.targetYourStudents.get('target').get('answer')).push(control);
  }

  removeAnswerToTarget() {
    let targetYourStudentsArray = <FormArray>this.targetYourStudents.get('target').get('answer');
    targetYourStudentsArray.removeAt(targetYourStudentsArray.length - 1);
  }


}

