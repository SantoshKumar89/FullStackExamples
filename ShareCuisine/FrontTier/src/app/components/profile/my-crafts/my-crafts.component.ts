import { Component, OnInit } from '@angular/core';
import { Craft } from 'src/app/models/craft';
import { CraftService } from 'src/app/services/craft.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-my-crafts',
  templateUrl: './my-crafts.component.html',
  styleUrls: ['./my-crafts.component.scss']
})
export class MyCraftsComponent implements OnInit {

  crafts: Craft[]=[];
  user:User;


  
  constructor(private craftService: CraftService,private loginService: LoginServiceService) { }

  ngOnInit(): void {
    this.user=this.loginService.currentUserValue;

    this.craftService.getUserCraft(this.user._id,true).subscribe(res => {
      this.crafts=res;
    })
  }

}
