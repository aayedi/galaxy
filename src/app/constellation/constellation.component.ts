import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class ConstellationComponent implements OnInit, OnDestroy {

  constellation: Star[];
  title: string;

  constructor(private router: ActivatedRoute, private dialog: MatDialog, private starService: StarService) {
  }

  ngOnInit(): void {
    this.initConstellationSubscription();
    this.router.params.subscribe(params => this.initConstellationByType(params.constellationType.toUpperCase()));
  }

  initConstellationSubscription(): void {
    this.starService.allFrontStarsSubject.subscribe(stars => this.constellation = stars);
    this.starService.allBackStarsSubject.subscribe(stars => this.constellation = stars);
    this.starService.allLibraryStarsSubject.subscribe(stars => this.constellation = stars);
  }

  initConstellationByType(constellationType: StarType): void {
    if (constellationType === StarType.FRONT) {
      this.title = 'Front constellation';
      this.starService.refreshAllFrontStars();
    }
    if (constellationType === StarType.BACK) {
      this.title = 'Back constellation';
      this.starService.refreshAllBackStars();
    }
    if (constellationType === StarType.LIBRARY) {
      this.title = 'Library constellation';
      this.starService.refreshAllLibraryStars();
    }
  }

  openStarForm(): void {
    const dialogRef = this.dialog.open(CreateStarComponent, {
      width: '350px',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.starService.addOneStar(response.data);
      }
    });
  }

  onDeleteOneStar(star: Star): void {
    this.starService.deleteOneStar(star);
  }

  ngOnDestroy(): void {
    if (this.starService.allFrontStarsSubject != null) {
      this.starService.allFrontStarsSubject.unsubscribe();
    }
    if (this.starService.allBackStarsSubject != null) {
      this.starService.allBackStarsSubject.unsubscribe();
    }
    if (this.starService.allLibraryStarsSubject != null) {
      this.starService.allLibraryStarsSubject.unsubscribe();
    }
  }
}
