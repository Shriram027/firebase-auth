import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {PaginatorModule} from 'primeng/paginator';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {ImageModule} from 'primeng/image';


const prime = [
  InputTextModule,
  ButtonModule,
  CardModule,
  PasswordModule,
  DividerModule,
  PaginatorModule,
  DropdownModule,
  TableModule,
  ToastModule,
  MenubarModule,
  ImageModule
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
