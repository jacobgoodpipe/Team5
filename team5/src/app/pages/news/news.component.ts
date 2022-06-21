import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {News} from '../../../models/news';
import {BehaviorSubject} from 'rxjs';
import {Article} from '../../../models/article';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public newsArticles$ = new BehaviorSubject<Article[]>([]);

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getNewsArticles();
  }

  getNewsArticles() {
    const url = 'https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json';
    this.http.get<News>(url).subscribe(n => {
      this.newsArticles$.next(n.articles)
    }, err =>  {
      console.log(err)
    })
}

}
