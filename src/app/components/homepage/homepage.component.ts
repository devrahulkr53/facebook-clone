import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  friendlist: {
    image:string,
    name:string
  }[] = [
    {image:'/assets/images/story/image (1).jfif',name:'John Doe'},
    {image:'/assets/images/story/image (2).jfif',name:'Adelina'},
    {image:'/assets/images/story/image (3).jfif',name:'Brandson Johnson'},
    {image:'/assets/images/story/image (4).jfif',name:'Lorem Ipsum'},
    {image:'/assets/images/story/image (5).jfif',name:'Cathenna'},
    {image:'/assets/images/story/image (6).jfif',name:'Katoka'},
    {image:'/assets/images/story/image (2).jfif',name:'Uchenna '},
    {image:'/assets/images/story/image (1).jfif',name:'Marielia'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
