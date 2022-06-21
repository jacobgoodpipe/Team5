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
  volume = '3,214,140';
  dailyRange = '149.21';
  longRange = '139.64';

  constructor() { }

  ngOnInit(): void {
  }

}
