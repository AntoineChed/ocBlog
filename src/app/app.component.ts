import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postsList: Post[] = [
      new Post({
        'title' : 'Mon premier post',
        'content' : 'Lorem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ip' +
        'sum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum',
      }),
      new Post({
        'title' : 'Mon deuxième post',
        'content' : 'Lorem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ip' +
        'sum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum',
      }),
      new Post({
        'title' : 'Mon troisième post',
        'content' : 'Lorem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ip' +
        'sum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum',
      }),
        new Post({
        'title' : 'Mon quatrième post',
        'content' : 'Lorem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ip' +
        'sum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum',
      })
    ];

}
