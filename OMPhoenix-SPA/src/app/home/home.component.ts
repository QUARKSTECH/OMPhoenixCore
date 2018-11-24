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
  clientImages: any = [];
  @ViewChild('owlElement') owlElement: OwlCarousel;

  constructor() {
    this.values = [{Id: 1, Value: 'USA'}, {Id: 2, Value: 'Canada'}, {Id: 3, Value: 'Uk'}];
    this.model.location = 1;
    this.model.service = 3;
    this.mySlideImages = [1, 2, 3].map((i) => '../assets/images/slider/' + i + '.jpg');
    this.mySlideOptions = {items: 1, dots: true, navigation: false};
    // this.myCarouselOptions = {items: 3, dots: true, navigation: false};
    // tslint:disable-next-line:max-line-length
    this.customerImages =  ['../../assets/images/rice mills.jpg', '../../assets/images/auto-parts.jpg', '../../assets/images/steel ind.jpg',
  '../../assets/images/MEDICAL INDUSTRIES.jpg', '../../assets/images/food INDUSTRIES.jpg'];
  this.customerOptions = {items: 1, dots: true, nav: true};
  this.clientOptions = {items: 1, dots: true, navigation: true};
  this.clientImages = ['./../assets/images/testimonial.jpg'];
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
