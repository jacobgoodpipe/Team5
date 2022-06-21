import {NewsSource} from './news-source';

export class Article {
  public source: NewsSource = new NewsSource();
  public author: string = '';
  public title: string = '';
  public description: string = '';
  public url: string = '';
  public urlToImage: string = '';
  public publishedAt: string = '';
  public content: string = '';
}
