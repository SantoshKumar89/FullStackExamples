import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, RequiredValidator } from '@angular/forms';
import { Enrollment } from 'src/app/models/enrollment';
import { MasterService } from 'src/app/services/master.service';
import { CraftService } from '../../../../services/craft.service';
import { CraftFormService } from '../craft-form.service'


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  enrollmentForm: FormGroup;
  certificatesForm: FormGroup;
  enrollmentValues: Enrollment[];
  helperText: string;
  showPassword: boolean = false;
  privateWithPswConst = 'privateWithPsw';


  constructor(private craftForm: CraftFormService, private masterService: MasterService, private craftService: CraftService) { }


  ngOnInit(): void {

    this.masterService.getEnrollment().subscribe(res => {
      this.enrollmentValues = res;
    })

    this.craftForm.craft.subscribe(res => {

      let optionControl = res.settings != undefined ? new FormControl(res.settings.enrollment.option._id) : new FormControl("");
      let passwordControl = res.settings != undefined ? new FormControl(res.settings.enrollment.password) : new FormControl("");

      if (res.settings !== undefined) {
        this.helperText = res.settings.enrollment.option.helperText;
      }

      if (res.settings != undefined && res.settings.enrollment.option.name == this.privateWithPswConst) {
        this.showPassword = true;
      }

      this.enrollmentForm = new FormGroup({
        'option': optionControl,
        'password': passwordControl
      })


      this.certificatesForm = new FormGroup({
        'enableCertificate': new FormControl(res.enableCertificate)
      })

    })

  }

  saveEnrollmentForm() {
    this.craftForm.currentCraftValue.settings = { enrollment: this.enrollmentForm.value };
    this.craftService.updateCraftById(this.craftForm.currentCraftValue).subscribe(res => {
      console.log("updated");
    });
  }

  saveCertificatesForm() {

    console.log(this.certificatesForm.value);
    this.craftForm.currentCraftValue.enableCertificate = this.certificatesForm.value.enableCertificate;
    this.craftService.updateCraftById(this.craftForm.currentCraftValue).subscribe(res => {
      console.log("updated");
    });

  }

  helper() {

    const result = this.enrollmentValues.filter(enrollValues => (enrollValues.name == this.privateWithPswConst))
    if (result[0]._id == this.enrollmentForm.get('option').value) {
      this.showPassword = true;
    } else {
      this.showPassword = false;
      this.enrollmentForm.get('password').setValue("");//reset password
    }

    this.helperText = this.enrollmentValues.filter(enrollValues => (enrollValues._id == this.enrollmentForm.get('option').value))[0].helperText;

  }

}
