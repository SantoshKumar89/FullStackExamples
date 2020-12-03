import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = new User();

  constructor(private router: Router,
    private loginService: LoginServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    //Add user if user is logging for the first time
    this.loginService.addUser(this.user).subscribe(
      res => { 
        console.log(res);
        //Then authenticate user and get the JWT token
        this.loginService.authenticate(this.user).subscribe( res => 
          {
            console.log(res);
            this.router.navigate(['/home']); 
          })
      }
    )

  }

}
