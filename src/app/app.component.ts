import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDieIu-JQDJvQRIwVsVwgRyVAzDs65Lj8I',
      authDomain: 'udemy-ng-http-5ad28.firebaseapp.com'
    });
  }
}
