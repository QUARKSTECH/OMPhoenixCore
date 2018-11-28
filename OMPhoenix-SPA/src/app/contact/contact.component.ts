import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: any;
  longitude: any;
  marker: any;

  constructor() { }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(22.7908, 86.1661),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.marker = new google.maps.Marker({
      position: new google.maps.LatLng(22.7908, 86.1661),
    animation: google.maps.Animation.BOUNCE,
      icon: '../../assets/images/map.png'
    });
    this.marker.setMap(this.map);
  }

  // setMapType(mapTypeId: string) {
  //   this.map.setMapTypeId(mapTypeId);
  // }

  // setCenter() {
  //   this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

  //   const location = new google.maps.LatLng(this.latitude, this.longitude);

  //   const marker = new google.maps.Marker({
  //     position: location,
  //     map: this.map,
  //     title: 'Got you!'
  //   });

  //   marker.addListener('click', this.simpleMarkerHandler);

  //   marker.addListener('click', () => {
  //     this.markerHandler(marker);
  //   });
  // }

  simpleMarkerHandler() {
    alert('Simple Component\'s function...');
  }

  markerHandler(marker: google.maps.Marker) {
    alert('Marker\'s Title: ' + marker.getTitle());
  }

  showCustomMarker() {


    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    const location = new google.maps.LatLng(this.latitude, this.longitude);

  }


//   myMap() {
//     var myCenter = new google.maps.LatLng(22.7908,86.1661);
// 	 var mapCanvas = document.getElementById("map");
//   var mapOptions = {center: myCenter, zoom: 14};
//   var map = new google.maps.Map(mapCanvas,mapOptions);
//   var marker = new google.maps.Marker({
//     position: myCenter,
// 	animation: google.maps.Animation.BOUNCE,
//     icon: "images/map.png"
//   });
//   marker.setMap(map);

//   google.maps.event.addListener(marker,'click',function() {
//     var infowindow = new google.maps.InfoWindow({
// tslint:disable-next-line:max-line-length
//       content:" <b> OM PHOENIX TRADERS  </b> <br /> <b> Address</b> 334 26, 2, Rd Number 4,<br> Adityapur 2, Adityapur Colony,<br> Adityapur, Jamshedpur, Jharkhand 831013"
//     });
//   infowindow.open(map,marker);
//   });
// }
}
