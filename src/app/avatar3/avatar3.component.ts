import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-avatar3',
  templateUrl: './avatar3.component.html',
  styleUrls: ['./avatar3.component.scss']
})
export class Avatar3Component {

  profile$ : Observable<string>;
  constructor(
    private store: Store<{updateProfile : string}>
  ){
    this.profile$ = store.select('updateProfile')
  }
}
