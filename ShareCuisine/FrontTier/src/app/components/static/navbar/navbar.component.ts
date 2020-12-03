import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from './../../../services/navbar-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public nav: NavbarServiceService) { }

  ngOnInit(): void {
  }

}
