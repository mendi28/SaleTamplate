import { Component, OnInit } from '@angular/core';
import * as blogs from '../../db/blogs.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  constructor() {}
  blogs = blogs.data;
  ngOnInit() {}
}
