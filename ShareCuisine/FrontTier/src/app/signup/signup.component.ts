import { Component, OnInit} from '@angular/core';
import { User } from '../model/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = new User();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() { 
  
    console.log(this.user);
    this.router.navigate(['/home']);


  }

}
