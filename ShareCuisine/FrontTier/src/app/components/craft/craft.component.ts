import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from './../../services/navbar-service.service';
import {LoginServiceService} from './../../services/login-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.scss']
})
export class CraftComponent implements OnInit {
  user:User;

  constructor(private nav:NavbarServiceService,private loginService: LoginServiceService) { }

  ngOnInit(): void {
  this.user=this.loginService.currentUserValue;

  this.nav.show();
  }

}
