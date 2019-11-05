import { Component, OnInit, Input } from '@angular/core';
import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';
import { LINKS } from 'src/static/links';

@Component({
  selector: 'app-star-link',
  templateUrl: './star-link.component.html',
  styleUrls: ['./star-link.component.scss']
})
export class StarLinkComponent implements OnInit {

  links: TreeNode[];

  constructor() { }

  ngOnInit() {
    this.links = LINKS;
  }

}
