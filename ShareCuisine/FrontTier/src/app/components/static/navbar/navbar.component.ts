import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from './../../../services/navbar-service.service';
import {LoginServiceService} from '../../../services/login-service.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user:User;

  constructor(public nav: NavbarServiceService,private loginService: LoginServiceService) { }

  ngOnInit(): void {
    console.log("llslsll"+this.user);

    this.loginService.currentUser.subscribe(res => {
      this.user=this.loginService.currentUserValue;
      console.log("llslsll"+this.user);

    })

    

  }

}
