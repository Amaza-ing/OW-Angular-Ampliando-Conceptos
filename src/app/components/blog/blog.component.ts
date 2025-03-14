import { Component } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { Article } from '../../models/Article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-blog',
  imports: [ArticleCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  constructor(public articleService: ArticleService) {}

  deleteArticle(id: number) {
    const index = this.articleService.articles.findIndex(
      (article) => article.id === id
    );
    this.articleService.articles.splice(index, 1);
  }
}
