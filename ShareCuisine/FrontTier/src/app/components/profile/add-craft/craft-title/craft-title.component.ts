import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CraftService } from '../../../../services/craft.service';
import { CraftFormService } from '../craft-form.service'


@Component({
  selector: 'app-craft-title',
  templateUrl: './craft-title.component.html',
  styleUrls: ['./craft-title.component.scss']
})
export class CraftTitleComponent implements OnInit {

  titleForm:FormGroup;
 
  constructor(private craftService: CraftService,
    private craftForm:CraftFormService) { }

  ngOnInit(): void {

    this.titleForm= new FormGroup({      
      'title': new FormControl(this.craftForm.currentCraftValue.title,Validators.required)
    });

  }

  save(){
    
  }
}
