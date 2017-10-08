import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {VideoDetailsPage} from '../video-details/video-details'

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';


@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  category : string;
  
  time_left : number;
  duration : number;
  time_elapsed : number;

  videos: FirebaseListObservable<any>;
  
  ticket : FirebaseObjectObservable<any>;

  plane_reaches_dest_in : FirebaseObjectObservable<any>;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afDb: AngularFireDatabase) {

   


     this.ticket = afDb.object('tickets/'+'ticketID1')
     this.ticket.subscribe( tckt => { //note tckt
        this.plane_reaches_dest_in = afDb.object('airplanes/'+ tckt.airplane_id +"/duration_for/"+tckt.to);
        this.plane_reaches_dest_in.subscribe( PRDI=>{ //note PRDI
   
          this.category = 'all';
          
          this.duration = tckt.estimate_duration;
          this.time_left = PRDI.timeleft;
          this.time_elapsed = this.duration - this.time_left;

          this.initializeVideos();


        });

     });


  }

  initializeVideos() : void{

    this.videos = this.afDb.list('videos',{
      query: {
        orderByChild: 'duration',
        endAt : this.time_left
      }
    });
    

  }

  openVideoDetails(video: any){
      this.navCtrl.push(VideoDetailsPage, video);
  }

  getItems(ev) {
    
  }


}
