import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import {
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [
    ArticleCardComponent,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  titleSize = 30;
  weekDay = new Date().getDay();

  constructor(public articleService: ArticleService) {}

  deleteArticle(id: number) {
    const index = this.articleService.articles.findIndex(
      (article) => article.id === id
    );
    this.articleService.articles.splice(index, 1);
  }

  changeTitleSize(value: number) {
    this.titleSize += value;

    this.titleSize = Math.min(40, Math.max(20, this.titleSize));
  }
}
