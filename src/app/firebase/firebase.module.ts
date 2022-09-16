import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

const fire = [
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireAuthModule,
  AngularFireStorageModule,
  AngularFirestoreModule,
  AngularFireDatabaseModule 
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    fire
  ],
  exports:[
    fire
  ]

})
export class FirebaseModule { }
