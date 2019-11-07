import {Component, OnInit} from '@angular/core';
import {STARS} from 'src/static/data';
import {ActivatedRoute} from '@angular/router';
import {Star, StarType} from '../models/star.model';
import {MatDialog} from '@angular/material/dialog';
import {CreateStarComponent} from '../create-star/create-star.component';
import {StarService} from '../service/star.service';

@Component({
  selector: 'app-star-list',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.scss']
})
export class ConstellationComponent implements OnInit {

  constellation: Star[];
  title: string;

  constructor(private router: ActivatedRoute, private dialog: MatDialog, private starService: StarService) {}

  ngOnInit() {
    this.initConstellationSubscription();
    this.router.params.subscribe(params => this.initConstellationByType(params.constellationType.toUpperCase()));
  }

  initConstellationSubscription() {
    this.starService.allFrontStarsSubject.subscribe(stars => this.constellation = stars);
    this.starService.allBackStarsSubject.subscribe(stars => this.constellation = stars);
    this.starService.allLibraryStarsSubject.subscribe(stars => this.constellation = stars);
  }

  initConstellationByType(constellationType: StarType): void {
    if (constellationType === StarType.FRONT) {
      this.title = 'Front constellation';
      this.starService.getAllFrontStars();
    }
    if (constellationType === StarType.BACK) {
      this.title = 'Back constellation';
      this.starService.getAllBackStars();
    }
    if (constellationType === StarType.LIBRARY) {
      this.title = 'Library constellation';
      this.starService.getAllLibraryStars();
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
        this.constellation.push(response.data);
      }
    });
  }

  onDeleteOneStar(star: Star) {
    const positionStarInConstellation = this.constellation.indexOf(star);
    this.constellation.splice(positionStarInConstellation, 1);
  }
}
