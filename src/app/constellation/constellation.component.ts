import {Component, OnInit} from '@angular/core';
import {STARS} from 'src/static/data';
import {ActivatedRoute} from '@angular/router';
import {Star, StarType} from '../models/star.model';
import {MatDialog} from '@angular/material/dialog';
import {CreateStarComponent} from '../create-star/create-star.component';

@Component({
  selector: 'app-star-list',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.scss']
})
export class ConstellationComponent implements OnInit {

  constellation: Star[];
  title: string;

  constructor(private router: ActivatedRoute, private dialog: MatDialog) {
    this.constellation = STARS as Star[];
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      const constellationType: StarType = params.constellationType.toUpperCase();
      this.constellation = this.getConstellationByType(constellationType);
    });
  }

  getConstellationByType(constellationType: StarType): Star[] {
    if (constellationType === StarType.FRONT) {
      this.title = 'Front constellation';
      return STARS.filter(star => star.type === StarType.FRONT) as Star[];
    }
    if (constellationType === StarType.BACK) {
      this.title = 'Back constellation';
      return STARS.filter(star => star.type === StarType.BACK) as Star[];
    }
    if (constellationType === StarType.LIBRARY) {
      this.title = 'Library constellation';
      return STARS.filter(star => star.type === StarType.LIBRARY) as Star[];
    }
  }

  openStarForm(): void {
    const dialogRef = this.dialog.open(CreateStarComponent, {
      width: '350px',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        response.data.id = 10;
        console.log(response);
        this.constellation.push(response.data);
      }
    });
  }

  onDeleteOneStar(star: Star) {
    const positionStarInConstellation = this.constellation.indexOf(star);
    this.constellation.splice(positionStarInConstellation, 1);
  }
}
