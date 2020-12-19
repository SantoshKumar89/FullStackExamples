import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddCraftComponent } from './add-craft/add-craft.component';

const routes: Routes = [{ path: ':profileId', component: ProfileComponent },
{ path: ':profileId/editProfile', component: EditProfileComponent },
{ path: ':profileId/craft/:craftId', component: AddCraftComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
