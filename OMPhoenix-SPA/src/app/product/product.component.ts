import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  indoFork = true;
  markAir = false;
  parker = false;
  productName = 'Indofork';
  constructor() { }

  ngOnInit() {
  }

  serviceType(type: string) {
    if (type === 'indoFork') {
      this.indoFork = true;
      this.markAir = false;
      this.parker = false;
      this.productName = 'Indofork';
    } else if (type === 'markAir') {
      this.markAir = true;
      this.indoFork = false;
      this.parker = false;
      this.productName = 'Mark Air Compressor';
    } else {
      this.parker = true;
      this.indoFork = false;
      this.markAir = false;
      this.productName = 'Parker Hannifin';
    }
  }
}
