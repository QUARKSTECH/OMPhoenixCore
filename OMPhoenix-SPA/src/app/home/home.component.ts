import { Component, OnInit, ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values: any;
  // location: number;
  // service: number;
  model: any = {};
  mySlideImages: any = [];
  mySlideOptions: any = {};
  myCarouselOptions: any = {};
  customerOptions: any = [];
  customerImages: any = [];
  clientOptions: any = [];
  clientImages = [
    {
      path: './../assets/images/testimonial.jpg',
      shortComment: 'Good Service',
      comments: 'Thanks to all your employees for making such a fine product.',
      name: 'Raj Kishor',
      type: 'Customer',
    },
    {
      path: './../assets/images/testimonial.jpg',
      shortComment: 'Good Service',
      comments: 'In my professional opinion Quincy Compressor makes one GREAT air compressor.',
      name: 'Rakesh Sharma',
      type: 'Customer',
    },
    {
      path: './../assets/images/testimonial.jpg',
      shortComment: 'Good Service',
      comments: 'That’s one of the toughest pieces of equipment I’ve ever seen.',
      name: 'Dheeraj Pandey',
      type: 'Customer',
    }
  ];
  teamOptions: any = [];
  teamImages = [
    {
      path: '../../assets/images/team1.png',
      type: 'Business Developer.',
      name: 'Mr. Rajeev'
    },
    {
      path: '../../assets/images/team2.png',
      type: 'Tech Support',
      name: 'Ragini Gupta'
    },
    {
      path: '../../assets/images/team3.png',
      type: 'Accoutant',
      name: 'Suresh Mishra'
    },
    {
      path: '../../assets/images/team4.png',
      type: 'Senior Executive',
      name: 'Manjeet Kaur'
    }
];
  @ViewChild('owlElement') owlElement: OwlCarousel;
  @ViewChild('owlClientElement') owlClientElement: OwlCarousel;
  @ViewChild('owlTeamElement') owlTeamElement: OwlCarousel;

  constructor() {
    this.mySlideImages = [1, 2, 3].map((i) => '../assets/images/' + 'NewSlider' + i + '.jpg');
    this.mySlideOptions = {items: 1, dots: true, loop: true, autoplay: true, margin : 40};
    this.clientOptions = {items: 3, dots: true, loop: true, autoplay: true, margin : 40};
    this.teamOptions = {items: 3, loop: true, autoplay: true};
  }

  ngOnInit() {
  }

  createAppointment() {
    console.log(this.model);
  }

  fun() {
    this.owlElement.next([200]);
  }
}
