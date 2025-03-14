import { Component } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-blog',
  imports: [ArticleCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
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
