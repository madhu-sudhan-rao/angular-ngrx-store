import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { counterReducer } from './store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/counter.effects';
import { AvaterComponent } from './shared/components/avater/avater.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { NgPrimeModule } from './shared/prime-ng-ui/ng-prime/ng-prime.module';
import { profileReducer } from './store/profile/profile.reducer';
import { Avatar2Component } from './avatar2/avatar2.component';
import { Avatar3Component } from './avatar3/avatar3.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterControlsComponent,
    CounterOutputComponent,
    AvaterComponent,
    Avatar2Component,
    Avatar3Component,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer,
      updateProfile: profileReducer
    }),
    EffectsModule.forRoot([
      CounterEffects,
    ]),
    NgPrimeModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
