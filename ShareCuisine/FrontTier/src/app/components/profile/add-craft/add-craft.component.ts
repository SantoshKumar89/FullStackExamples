import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from './../../../services/navbar-service.service';
import { Craft } from 'src/app/models/craft';
import { CraftService } from '../../../services/craft.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CraftFormService } from './craft-form.service'

@Component({
  selector: 'app-add-craft',
  templateUrl: './add-craft.component.html',
  styleUrls: ['./add-craft.component.scss']
})
export class AddCraftComponent implements OnInit {

  public craftCreated; boolean=false;


  constructor(private nav: NavbarServiceService,
    private craftService: CraftService,
    private route: ActivatedRoute,
    private craftForm:CraftFormService ) { }

  ngOnInit(): void {

    this.nav.show();
    this.route.queryParams.subscribe(params => {
      this.craftForm.currentCraftValue._id = this.route.snapshot.paramMap.get('craftId');
    });

    this.craftService.getCraftById(this.craftForm.currentCraftValue._id).subscribe(res => {
      this.craftForm.currentCraftValue = res;
      this.craftCreated=true;
    })


  }

}
