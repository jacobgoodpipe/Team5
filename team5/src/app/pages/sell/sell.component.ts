import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  @ViewChild('marketPrice') marketPrice: ElementRef
  @ViewChild('numOfUnits') numOfUnits: ElementRef
  @ViewChild('tradeFee') tradeFee: ElementRef
  @ViewChild('totalAmount') totalAmount: ElementRef


  constructor() { }

  ngOnInit(): void {
  }

  calcTotal(){
    var marketPrice = 20;
    var numOfUnits = this.numOfUnits.nativeElement.value;
    var tradeFee = 5.75;

    var total = (marketPrice * numOfUnits) + tradeFee;

    this.totalAmount.nativeElement.value = total;
  }

}
