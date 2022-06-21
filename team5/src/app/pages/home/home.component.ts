import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  price = '20';
  credits = '';
  amount = '';
  volume = '';
  dailyRange = '';
  longRange = '';

  constructor() { }

  ngOnInit(): void {
  }

}
