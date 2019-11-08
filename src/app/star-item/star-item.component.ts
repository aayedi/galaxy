import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Star, StarType} from '../models/star.model';
import {STARS} from '../../static/data';

@Component({
  selector: 'app-star-item',
  templateUrl: './star-item.component.html',
  styleUrls: ['./star-item.component.scss']
})
export class StarItemComponent implements OnInit {

  @Input()
  star: Star;
  @Output()
  starEmitter = new EventEmitter<Star>();

  constructor() {}

  ngOnInit() {}

  onDeleteStar(): void {
    this.starEmitter.emit(this.star);
  }
}
