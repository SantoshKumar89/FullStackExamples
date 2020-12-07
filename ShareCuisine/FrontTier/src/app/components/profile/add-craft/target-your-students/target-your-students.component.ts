import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
        'answer': new FormControl("")
      }),
      'prerequisites': new FormGroup({
        'answer': new FormControl("")
      }),
      'target': new FormGroup({
        'answer': new FormControl("")
      })
      
    })
  }

  save(){

  }

}
