import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CraftComponent } from './craft.component';

const routes: Routes = [{ path: ':craftId', component: CraftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CraftRoutingModule { }
