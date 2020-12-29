import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from './../../services/navbar-service.service';
import { CraftService } from '../../services/craft.service';
import { Craft } from 'src/app/models/craft';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  crafts: Craft[]=[];


  constructor(public nav: NavbarServiceService, private craftService: CraftService) { }

  ngOnInit(): void {
    this.nav.show();

    this.craftService.getCraft().subscribe(res => {
      this.crafts=res;
    })
  }

}
