import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, RequiredValidator } from '@angular/forms';
import { Enrollment } from 'src/app/models/enrollment';
import { MasterService } from 'src/app/services/master.service';
import { CraftService } from '../../../../services/craft.service';
import { CraftFormService } from '../craft-form.service'
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit,OnDestroy {
  


  enrollmentForm: FormGroup;
  certificatesForm: FormGroup;
  enrollmentValues: Enrollment[];
  helperText: string;
  showPassword: boolean = false;
  privateWithPswConst = 'privateWithPsw';
  craftFormSubscription: Subscription = new Subscription();;
  craftServiceSubscription: Subscription = new Subscription();;
  enrollmentServiceSubscription: Subscription = new Subscription();;



  constructor(private toastr: ToastrService,private craftForm: CraftFormService, private masterService: MasterService, private craftService: CraftService) { }


  ngOnInit(): void {

    this.enrollmentServiceSubscription=this.masterService.getEnrollment().subscribe(res => {
      this.enrollmentValues = res;
    })

    this.craftFormSubscription=this.craftForm.craft.subscribe(res => {

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
    this.craftServiceSubscription=this.craftService.updateCraftById(this.craftForm.currentCraftValue).subscribe(res => {
      this.toastr.success('Updated','Settings')
    });
  }

  saveCertificatesForm() {

    this.craftForm.currentCraftValue.enableCertificate = this.certificatesForm.value.enableCertificate;
    this.craftServiceSubscription=this.craftService.updateCraftById(this.craftForm.currentCraftValue).subscribe(res => {
      this.toastr.success('Updated','Settings')
      this.craftForm.currentCraftValue=this.craftForm.currentCraftValue;//Triggers next method

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

  ngOnDestroy(): void {

    this.craftFormSubscription.unsubscribe();
    this.craftServiceSubscription.unsubscribe();
    this.enrollmentServiceSubscription.unsubscribe();
  }

}
