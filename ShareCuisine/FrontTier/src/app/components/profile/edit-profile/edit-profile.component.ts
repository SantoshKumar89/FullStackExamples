import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from './../../../services/navbar-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(private navBarSer:NavbarServiceService) { }

  ngOnInit(): void {

    this.navBarSer.show();    
  }

}
