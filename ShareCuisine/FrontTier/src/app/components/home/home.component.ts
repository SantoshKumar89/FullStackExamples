import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from './../../services/navbar-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public nav: NavbarServiceService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
