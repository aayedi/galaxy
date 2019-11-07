import {Injectable, OnInit} from '@angular/core';
import {STARS} from 'src/static/data';
import {Star, StarType} from '../models/star.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
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
    this.getAllStars();
  }

  emitAllStarsSubject() {
    this.allStarsSubject.next(this.allStars.slice());
  }

  emitAllFrontStarsSubject() {
    this.allFrontStarsSubject.next(this.allFrontStars.slice());
  }

  emitAllBackStarsSubject() {
    this.allBackStarsSubject.next(this.allBackStars.slice());
  }

  emitAllLibraryStarsSubject(): void {
    this.allLibraryStarsSubject.next(this.allLibraryStars.slice());
  }

  getAllStars(): void {
    this.allStars = STARS as Star[];
    console.log('getAllStars', this.allStars);
    this.emitAllStarsSubject();
  }

  getAllFrontStars(): void {
    this.allFrontStars = this.allStars.filter(star => star.type === StarType.FRONT);
    this.emitAllFrontStarsSubject();
  }

  getAllBackStars(): void {
    this.allBackStars = this.allStars.filter(star => star.type === StarType.BACK);
    this.emitAllBackStarsSubject();
  }

  getAllLibraryStars(): void {
    this.allLibraryStars = this.allStars.filter(star => star.type === StarType.LIBRARY);
    this.emitAllLibraryStarsSubject();
  }
}
