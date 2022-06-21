import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  price = '20';
  credits = '1';
  amount = '2';
  volume = '3';
  dailyRange = '4';
  longRange = '5';

  constructor() { }

  ngOnInit(): void {
  }

}
