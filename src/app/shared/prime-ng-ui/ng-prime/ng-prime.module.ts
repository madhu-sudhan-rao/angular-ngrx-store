import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

const primengComponents=[
  CommonModule,
  AvatarModule,
  ButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    primengComponents
  ],
  exports:[
    primengComponents
  ]
})
export class NgPrimeModule { }
