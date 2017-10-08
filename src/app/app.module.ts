import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { VideosPage } from '../pages/videos/videos';
import { AboutPage } from '../pages/about/about';
import { VideoDetailsPage } from '../pages/video-details/video-details';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AngularFireModule} from 'angularfire2/index' 
import {AngularFireDatabase} from 'angularfire2/database-deprecated';

// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';


export const firebaseConfig = {
  apiKey: "AIzaSyAKu2vGBM8P83-MUX5ua6R6ER-oKViRRLE",
  authDomain: "airplay-c411a.firebaseapp.com",
  databaseURL: "https://airplay-c411a.firebaseio.com",
  projectId: "airplay-c411a",
  storageBucket: "airplay-c411a.appspot.com",
  messagingSenderId: "250198471002"
};

@NgModule({
  declarations: [
    MyApp,
    VideosPage,
    AboutPage,
    VideoDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule, // Put ionic2-rating module here
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VideosPage,
    AboutPage,
    VideoDetailsPage
  ],
  providers: [
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
