import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from './../../services/navbar-service.service';
import { LoginServiceService } from './../../services/login-service.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { Craft } from 'src/app/models/craft';
import { CraftService } from '../../services/craft.service';


@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.scss']
})
export class CraftComponent implements OnInit {
  craft: Craft;
  user: User;

  constructor(private craftService: CraftService, private route: ActivatedRoute, private nav: NavbarServiceService, private loginService: LoginServiceService) { }

  ngOnInit(): void {

    let craftId: string;


    this.nav.show();

    this.route.queryParams.subscribe(params => {
      craftId = this.route.snapshot.paramMap.get('craftId');
    });

    this.craftService.getCraftById(craftId).subscribe(res => {
      this.craft = res;

      console.log(this.craft);
      this.loginService.getUserById(res.createdBy).subscribe(res => {
        this.user = res;
        console.log(this.user);

      })

    })

  }

}
