import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../services/login-service.service';
import { NavbarServiceService } from './../../services/navbar-service.service';

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:User;
  constructor(private loginService: LoginServiceService,private nav:NavbarServiceService) { }

  ngOnInit(): void {
  this.user=this.loginService.currentUserValue;
  this.nav.show();
  this.nav.disableSticky();
  }

}
