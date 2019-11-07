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
  frontStars: Star[];
  backStars: Star[];
  @Output()
  starEmitter = new EventEmitter<Star>();

  constructor() {
    this.frontStars = [];
    this.backStars = [];
  }

  ngOnInit() {

    STARS.forEach((starItem) => {
      if (this.star && this.star.links && this.star.links.indexOf(starItem.id) !== -1) {
        if (starItem.type === StarType.FRONT) {
          this.frontStars.push(starItem as Star);
        } else if (starItem.type === StarType.BACK) {
          this.backStars.push(starItem as Star);
        }
      }
    });
  }

  onDeleteStar(): void {
    this.starEmitter.emit(this.star);
  }
}
