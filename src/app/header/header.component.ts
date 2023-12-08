import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { init } from '../store/counter.actions';
import { update } from '../store/profile/profile.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
