import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, init } from './store/counter.actions';
import { Observable } from 'rxjs';
import { update } from './store/profile/profile.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-store';
  profile$ : Observable<string>

  ngOnInit(): void {
    this.store.dispatch(init())  
  }

  constructor(
    private store: Store<{updateProfile: string}>
  ){
    this.profile$ = store.select('updateProfile')
    
  }

  updateProfile(){
    let letter =  this.randomLetter();
    this.store.dispatch(update({value: letter}))
    console.log(this.profile$);
    
  }

  randomLetter(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = characters.charAt(Math.floor(Math.random() * characters.length))
    return result;
  }
}
