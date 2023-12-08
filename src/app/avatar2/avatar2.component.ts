import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-avatar2',
  templateUrl: './avatar2.component.html',
  styleUrls: ['./avatar2.component.scss']
})
export class Avatar2Component {

  profile$ : Observable<string>;
  constructor(
    private store: Store<{updateProfile : string}>
  ){
    this.profile$ = store.select('updateProfile')
  }

}
