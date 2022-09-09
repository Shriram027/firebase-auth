import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

const prime = [
  InputTextModule,
  ButtonModule,
  CardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    prime
  ],
  exports:[
    prime
  ]
})
export class PrimeNGModule { }
