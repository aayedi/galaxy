import {Component, OnInit} from '@angular/core';
import {FAKE_CONTENT} from '../../static/fakeContent';
import {ConstellationCard} from '../models/constellation-card.model';

@Component({
  selector: 'app-js-galaxy',
  templateUrl: './js-galaxy.component.html',
  styleUrls: ['./js-galaxy.component.scss']
})
export class JsGalaxyComponent implements OnInit {

  title: string;
  description: string;
  constellationsCard: ConstellationCard[];

  constructor() {
    this.title = 'The javascript galaxy';
    this.description = FAKE_CONTENT + FAKE_CONTENT + FAKE_CONTENT + FAKE_CONTENT + FAKE_CONTENT;
    const frontConstellationCard = {
      name: 'Front constellation',
      logo: 'https://www.whizsolutions.co.uk/wp-content/uploads/2018/08/maxresdefault.jpg',
      link: '/constellation/front',
    };
    const backConstellationCard = {
      name: 'Back constellation',
      logo: 'https://miro.medium.com/max/3552/1*vUgaEEzxSp2YWsJ7p7jgjA.png',
      link: '/constellation/back',
    };
    const libraryConstellationCard = {
      name: 'Library constellation',
      logo: 'https://image.slidesharecdn.com/mobx-state-treev1-171123215918/95/mobx-' +
        'statetree-the-new-generation-of-the-state-containers-8-638.jpg?cb=1511526842',
      link: '/constellation/library',
    };
    this.constellationsCard = [];
    this.constellationsCard.push(frontConstellationCard);
    this.constellationsCard.push(backConstellationCard);
    this.constellationsCard.push(libraryConstellationCard);
  }

  ngOnInit() {
  }

}
