import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoDetailsPage } from './video-details';

@NgModule({
  declarations: [
    VideoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoDetailsPage),
  ],
})
export class VideoDetailsPageModule {}
