import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from '../../../../services/login-service.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {


  generalForm: FormGroup;
  user: User;
  constructor(private loginService: LoginServiceService) { }


  ngOnInit(): void {

    this.user = this.loginService.currentUserValue;

    this.generalForm = new FormGroup({
      'name': new FormControl(this.user.name,Validators.required),
      'userName': new FormControl(this.user.userName,[Validators.required,Validators.email]),
      'email': new FormControl(this.user.email,Validators.required),
      'password': new FormControl(this.user.password,Validators.required),
      'profile': new FormGroup({
        'description': new FormControl(this.user.profile !==undefined? this.user.profile.description:""),
        'phone': new FormControl(this.user.profile  !==undefined? this.user.profile.phone:"")
      })
    })

  }

  onSubmit() {
    console.log(this.generalForm.value);
  }
}
