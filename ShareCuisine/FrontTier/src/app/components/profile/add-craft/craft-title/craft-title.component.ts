import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CraftService } from '../../../../services/craft.service';
import { CraftFormService } from '../craft-form.service'

@Component({
  selector: 'app-craft-title',
  templateUrl: './craft-title.component.html',
  styleUrls: ['./craft-title.component.scss']
})
export class CraftTitleComponent implements OnInit, OnDestroy {


  titleForm: FormGroup;


  constructor(private craftService: CraftService,
    private craftForm: CraftFormService) { }

  ngOnInit(): void {

    this.craftForm.craft.subscribe(res => {
      this.titleForm = new FormGroup({
        'title': new FormControl(res.title, Validators.required)
      });
    })
  }

  save() {
    this.craftForm.currentCraftValue.title = this.titleForm.value.title;
    this.craftService.updateCraftById(this.craftForm.currentCraftValue).subscribe(res => {
      console.log("updated successfully")
    })
  }

  ngOnDestroy(): void {

  }
}
