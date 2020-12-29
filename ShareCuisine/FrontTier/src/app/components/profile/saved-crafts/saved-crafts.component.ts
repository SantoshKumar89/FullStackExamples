import { Component, OnInit } from '@angular/core';
import { CraftService } from 'src/app/services/craft.service';
import { Craft } from 'src/app/models/craft';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-saved-crafts',
  templateUrl: './saved-crafts.component.html',
  styleUrls: ['./saved-crafts.component.scss']
})
export class SavedCraftsComponent implements OnInit {


  crafts: Craft[]=[];
  user:User;
  
  constructor(private craftService: CraftService,private loginService: LoginServiceService) { }

  ngOnInit(): void {
    this.user=this.loginService.currentUserValue;

    this.craftService.getUserCraft(this.user._id,false).subscribe(res => {
      this.crafts=res;
    })

  }

}
