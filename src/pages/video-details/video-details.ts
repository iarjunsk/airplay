import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-video-details',
  templateUrl: 'video-details.html',
})
export class VideoDetailsPage {
  video : any;
  rate : number;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public sanitizer: DomSanitizer
             ) {
      this.video = navParams.data;
      console.log(navParams.data);

      
  }

  goBack(){
    this.navCtrl.pop();
  }

  onRatingChanged(event : Event): void {
    console.log("Rating changed!");

  }

  openYoutube(): void {

  }

  videoURL(){
    return this.video.url.bypassSecurityTrustUrl(this.mediaItems[1].url);
  }

}
