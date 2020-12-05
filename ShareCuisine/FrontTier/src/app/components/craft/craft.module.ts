import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CraftRoutingModule } from './craft-routing.module';
import { CraftComponent } from './craft.component';


@NgModule({
  declarations: [CraftComponent],
  imports: [
    CommonModule,
    CraftRoutingModule
  ]
})
export class CraftModule { }
