import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  loveIts = 0;

  constructor() { }

  ngOnInit() {
  }

  onUpdateLoveIts(n: number) {
    this.loveIts += n;
    return this.loveIts = (this.loveIts < 0) ? 0 : this.loveIts;
  }
}
