import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from './../../../services/navbar-service.service';


@Component({
  selector: 'app-add-craft',
  templateUrl: './add-craft.component.html',
  styleUrls: ['./add-craft.component.scss']
})
export class AddCraftComponent implements OnInit {

  constructor(private nav:NavbarServiceService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
