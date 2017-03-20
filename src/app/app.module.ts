import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAFCc9QvMA04AROJoqyXOkoy8T45dwQ7qs",
    authDomain: "higi-32343.firebaseapp.com",
    databaseURL: "https://higi-32343.firebaseio.com",
    storageBucket: "higi-32343.appspot.com",
    messagingSenderId: "246736505950"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
