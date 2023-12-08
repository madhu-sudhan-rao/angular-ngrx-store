import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avater',
  templateUrl: './avater.component.html',
  styleUrls: ['./avater.component.scss']
})
export class AvaterComponent {
  @Input('image') imageUrl!: string;
  @Input() size: any;
  @Input() shape: any;
  @Input() label!: string;
  @Input() class!: string;
}
