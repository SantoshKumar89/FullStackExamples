import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../../services/login-service.service';
import { NavbarServiceService } from './../../services/navbar-service.service';
import {CraftService} from '../../services/craft.service';

import { User } from 'src/app/models/user';
import { Craft } from 'src/app/models/craft';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:User;
  constructor(private loginService: LoginServiceService,
    private nav:NavbarServiceService,
    private router:Router,
    private craft:CraftService
    ) { }

  ngOnInit(): void {
  this.user=this.loginService.currentUserValue;

  this.nav.show();
  this.nav.disableSticky();
  }

  addCraft():void{
    let craft = new Craft();
    craft.createdBy=this.user._id;

    this.craft.addCraft(craft).subscribe(res => {
      const routeUrl=`/profile/${this.user._id}/craft/${res._id}`
      this.router.navigate([routeUrl]);
    })
    
  }



}
