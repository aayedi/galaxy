import { Component, OnInit } from '@angular/core';
import { STARS } from 'src/static/data';

@Component({
  selector: 'app-star-list',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.scss']
})
export class StarListComponent implements OnInit {

  stars: any ;
  
  constructor() { 
    this.stars = STARS;
  }

  ngOnInit() {
  }

}
