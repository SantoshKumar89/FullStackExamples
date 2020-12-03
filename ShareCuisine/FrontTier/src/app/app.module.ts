import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticModule } from './components/static/static.module';
import { VideoModalComponent } from './components/shared/video-modal/video-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StaticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
