import { Injectable } from '@angular/core';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    {
      id: 1,
      title: 'Título 1',
      body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rem sit, ea nulla iusto fugiat veniam sapiente impedit optio accusantium necessitatibus natus nihil fuga qui officiis amet eos harum. Similique.',
      author: 'alberto@email.com',
    },
    {
      id: 2,
      title: 'Título 2',
      body: 'Beatae rem sit, ea nulla iusto fugiat veniam sapiente impedit optio accusantium necessitatibus natus nihil fuga qui officiis amet eos harum. Similique.',
      author: 'beatriz@email.com',
    },
    {
      id: 3,
      title: 'Título 3',
      body: 'Optio accusantium necessitatibus natus nihil fuga qui officiis amet eos harum. Similique.',
      author: 'carlos@email.com',
    },
  ];
}
