import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../../services/login-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email: string;
  password: string;
  isLoginValid: boolean=true;

  constructor(private router: Router,
    private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    let user = new User();
    user.email=this.email;
    user.password=this.password;

    //Check if the user is known user
    this.loginService.authenticate(user).subscribe(res=>{
      this.isLoginValid=true;

    if(res.token != undefined){
      console.log(res.token);
      sessionStorage.setItem('token', res.token);
      this.loginService.currentUserValue=this.loginService.tokenDecoder(res.token);
      this.router.navigate(['/home']);
    }else{
      this.isLoginValid=false;
    }
    })

  }

}
