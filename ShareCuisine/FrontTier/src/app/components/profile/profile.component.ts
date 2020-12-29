import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';
import { NavbarServiceService } from './../../services/navbar-service.service';
import { CraftService } from '../../services/craft.service';

import { User } from 'src/app/models/user';
import { Craft } from 'src/app/models/craft';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  loginUser:User;
  isUserProfile: boolean = false;
  queryPathSubscription: Subscription = new Subscription();


  constructor(private loginService: LoginServiceService,
    private nav: NavbarServiceService,
    private router: Router,
    private craft: CraftService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.loginUser=this.loginService.currentUserValue;

    this.nav.show();
    this.nav.disableSticky();

    this.queryPathSubscription = this.route.queryParams.subscribe(params => {


      const profileId= this.route.snapshot.paramMap.get('profileId');
      
      if (this.loginUser._id === profileId) {
        this.isUserProfile = true;
      }

      this.loginService.getUserById(profileId).subscribe(res => {
        this.user = res;

      })



    })




  }

  addCraft(): void {
    let craft = new Craft();
    craft.createdBy = this.user._id;

    this.craft.addCraft(craft).subscribe(res => {
      const routeUrl = `/profile/${this.user._id}/craft/${res._id}`
      this.router.navigate([routeUrl]);
      this.toastr.info('Please Update Details', 'Default Template Loaded', {
        disableTimeOut: true,
        tapToDismiss: true,
        closeButton: true
      });
    })




  }



}
