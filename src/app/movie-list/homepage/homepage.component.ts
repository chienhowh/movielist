import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  slides = [
    { 'image': 'https://picsum.photos/id/237/200/300' },
    { 'image': 'https://picsum.photos/id/111/200/300' },
    { 'image': 'https://picsum.photos/id/237/200/300' },
    { 'image': 'https://picsum.photos/id/237/200/300' },
    { 'image': 'https://picsum.photos/id/981/200/300' },
  ]
  constructor() { }
  ngOnInit() { }

}
