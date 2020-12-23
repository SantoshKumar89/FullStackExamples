import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CraftService } from '../../../../services/craft.service';
import { CraftFormService } from '../craft-form.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-craft-title',
  templateUrl: './craft-title.component.html',
  styleUrls: ['./craft-title.component.scss']
})
export class CraftTitleComponent implements OnInit, OnDestroy {


  titleForm: FormGroup;


  constructor(private craftService: CraftService,
    private craftForm: CraftFormService,
    private toastr: ToastrService) { }

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
      this.toastr.success('Hello world!', 'Toastr fun!');
    })
  }

  ngOnDestroy(): void {

  }
}
