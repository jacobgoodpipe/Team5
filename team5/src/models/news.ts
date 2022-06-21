import {Article} from './article';

export class News {
  public status: string = '';
  public articles: Article[] = [];
  public totalResults: number = 0;
}
