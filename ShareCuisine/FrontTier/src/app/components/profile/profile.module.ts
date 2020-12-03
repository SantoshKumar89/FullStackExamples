import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MyCraftsComponent } from './my-crafts/my-crafts.component';
import { SavedCraftsComponent } from './saved-crafts/saved-crafts.component';


@NgModule({
  declarations: [ProfileComponent, MyCraftsComponent, SavedCraftsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
