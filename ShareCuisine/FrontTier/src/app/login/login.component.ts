import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    console.log(this.email + this.password);
    this.router.navigate(['/home']);

  }

}
