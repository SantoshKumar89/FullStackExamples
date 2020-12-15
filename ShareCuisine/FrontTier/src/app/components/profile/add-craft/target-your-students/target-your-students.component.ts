import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-target-your-students',
  templateUrl: './target-your-students.component.html',
  styleUrls: ['./target-your-students.component.scss']
})
export class TargetYourStudentsComponent implements OnInit {


  targetYourStudents:FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.targetYourStudents = new FormGroup({
      'learn': new FormGroup({
        'answer': new FormArray([new FormControl("")])
      }),
      'prerequisites': new FormGroup({
        'answer': new FormArray([new FormControl("")])
      }),
      'target': new FormGroup({
        'answer': new FormArray([new FormControl("")])
      })
    })
  }

  save(){

    console.log(JSON.stringify(this.targetYourStudents.value));

  }

  addAnswerToLearn(){
    const control=new FormControl("",Validators.required);
    (<FormArray>this.targetYourStudents.get('learn').get('answer')).push(control);
  }

  addAnswerToPrerequisites(){
    const control=new FormControl("",Validators.required);
    (<FormArray>this.targetYourStudents.get('prerequisites').get('answer')).push(control);
  }


  addAnswerToTarget(){
    const control=new FormControl("",Validators.required);
    (<FormArray>this.targetYourStudents.get('target').get('answer')).push(control);
  }

}

