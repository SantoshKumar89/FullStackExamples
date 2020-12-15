import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Enrollment } from 'src/app/models/enrollment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  enrollmentForm: FormGroup;
  certificatesForm: FormGroup;


  enrollmentValues: Enrollment[] = [{ name: "public", value: "Public", helperText: "Public courses are public to all users within Cisco Udemy for Business Portal. They show up in search results and are available for anyone to take inside Cisco Udemy for Business Portal." },
  { name: "private", value: "Private (Invitation Only)", helperText: "If a course's enrollment page is invitation only, the course won't show up in search results on Cisco Udemy for Business Portal. Accept new student requests and send invitations from the 'Students' page found under 'Course Management' in the left navigation." }, { name: "privateWithPsw", value: "Private (Password Protected)", helperText: "If a course's enrollment page is password protected, the course won't show up in search results on Cisco Udemy for Business Portal. Instead, share the course URL and password directly with students you want to enroll. Keep in mind this provides only a low level of security. Students could share your course URL with an embedded password." }]


  helperText: string;
  constructor() {
  }

  ngOnInit(): void {

    this.enrollmentForm = new FormGroup({
      'enroll': new FormControl(""),
      'password': new FormArray([])
    })

    this.certificatesForm=new FormGroup({
      'enableCertificate': new FormControl()
    })
  }

  saveEnrollmentForm() {
    console.log(this.enrollmentForm.value);
  }

  saveCertificatesForm(){
    console.log(this.certificatesForm.value);
  }

  helper() {
    this.helperText = this.enrollmentForm.get('enroll').value.helperText;
    if (this.enrollmentForm.get('enroll').value.name == "privateWithPsw") {
      (<FormArray>this.enrollmentForm.get('password')).push(new FormControl("", Validators.required));
    } else {
      const passwordArray = <FormArray>this.enrollmentForm.get('password');
      if (passwordArray.length > 0) {
        passwordArray.removeAt(passwordArray.length - 1)
      }
    }

  }

}
