import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-craft-title',
  templateUrl: './craft-title.component.html',
  styleUrls: ['./craft-title.component.scss']
})
export class CraftTitleComponent implements OnInit {

  titleForm:FormGroup;

  constructor() { }

  ngOnInit(): void {


    this.titleForm= new FormGroup({
      'title': new FormControl("New Craft",Validators.required)
    });

  }

  save(){

  }
}
