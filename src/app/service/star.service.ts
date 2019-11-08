import {Injectable} from '@angular/core';
import {STARS} from 'src/static/data';
import {Star, StarType} from '../models/star.model';
import {Subject} from 'rxjs';


@Injectable()
export class StarService {

  private allStars: Star[];
  private allFrontStars: Star[];
  private allBackStars: Star[];
  private allLibraryStars: Star[];

  allStarsSubject: Subject<Star[]>;
  allFrontStarsSubject: Subject<Star[]>;
  allBackStarsSubject: Subject<Star[]>;
  allLibraryStarsSubject: Subject<Star[]>;

  constructor() {
    this.allStarsSubject = new Subject<Star[]>();
    this.allFrontStarsSubject = new Subject<Star[]>();
    this.allBackStarsSubject = new Subject<Star[]>();
    this.allLibraryStarsSubject = new Subject<Star[]>();
    this.refreshAllStars();
  }

  emitAllStarsSubject(): void {
    this.allStarsSubject.next(this.allStars.slice());
  }

  emitAllFrontStarsSubject(): void {
    this.allFrontStarsSubject.next(this.allFrontStars.slice());
  }

  emitAllBackStarsSubject(): void {
    this.allBackStarsSubject.next(this.allBackStars.slice());
  }

  emitAllLibraryStarsSubject(): void {
    this.allLibraryStarsSubject.next(this.allLibraryStars.slice());
  }

  refreshAllStars(): void {
    this.allStars = STARS as Star[];
    this.emitAllStarsSubject();
  }

  refreshAllFrontStars(): void {
    this.allFrontStars = this.allStars.filter(star => star.type === StarType.FRONT);
    this.emitAllFrontStarsSubject();
  }

  refreshAllBackStars(): void {
    this.allBackStars = this.allStars.filter(star => star.type === StarType.BACK);
    this.emitAllBackStarsSubject();
  }

  refreshAllLibraryStars(): void {
    this.allLibraryStars = this.allStars.filter(star => star.type === StarType.LIBRARY);
    this.emitAllLibraryStarsSubject();
  }

  addOneStar(star: Star): void {
    this.allStars.push(star);
    this.emitAllStarsSubject();
    this.refreshStarsByStarType(star.type);
  }

  refreshStarsByStarType(starType: StarType): void {
    if (starType === StarType.FRONT) {
      this.refreshAllFrontStars();
    }
    if (starType === StarType.BACK) {
      this.refreshAllBackStars();
    }
    if (starType === StarType.LIBRARY) {
      this.refreshAllLibraryStars();
    }
  }

  deleteOneStar(star: Star): void {
    const positionStarInConstellation = this.allStars.indexOf(star);
    this.allStars.splice(positionStarInConstellation, 1);
    this.emitAllStarsSubject();
    this.refreshStarsByStarType(star.type);
  }
}
