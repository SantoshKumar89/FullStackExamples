import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoModalComponent } from './video-modal/video-modal.component'

@NgModule({
  declarations: [VideoModalComponent],
  imports: [
    CommonModule
  ],
  exports:[
    VideoModalComponent
  ]
})
export class SharedModule { }
