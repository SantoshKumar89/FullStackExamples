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
import { AddCraftComponent } from './add-craft/add-craft.component';
import { CraftTitleComponent } from './add-craft/craft-title/craft-title.component';
import { TargetYourStudentsComponent } from './add-craft/target-your-students/target-your-students.component';
import { CurriculumComponent } from './add-craft/curriculum/curriculum.component';
import { CourseLandingPageComponent } from './add-craft/course-landing-page/course-landing-page.component';
import { CaptionsComponent } from './add-craft/captions/captions.component';
import { StudentsComponent } from './add-craft/students/students.component';
import { SettingsComponent } from './add-craft/settings/settings.component';


@NgModule({
  declarations: [ProfileComponent, MyCraftsComponent, SavedCraftsComponent, EditProfileComponent, GeneralComponent, PreferenceComponent, ActivityComponent, AddCraftComponent, CraftTitleComponent, TargetYourStudentsComponent, CurriculumComponent, CourseLandingPageComponent, CaptionsComponent, StudentsComponent, SettingsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
