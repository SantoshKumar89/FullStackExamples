import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MyCraftsComponent } from './my-crafts/my-crafts.component';
import { SavedCraftsComponent } from './saved-crafts/saved-crafts.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GeneralComponent } from './edit-profile/general/general.component';
import { PreferenceComponent } from './edit-profile/preference/preference.component';
import { ActivityComponent } from './edit-profile/activity/activity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfileComponent, MyCraftsComponent, SavedCraftsComponent, EditProfileComponent, GeneralComponent, PreferenceComponent, ActivityComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
