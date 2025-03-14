import { Component, Input } from '@angular/core';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css',
})
export class ArticleCardComponent {
  @Input()
  article?: Article;
}
