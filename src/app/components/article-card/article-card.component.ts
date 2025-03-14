import { Component, input, output, signal } from '@angular/core';
import { Article } from '../../models/Article';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  imports: [RouterLink],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css',
})
export class ArticleCardComponent {
  article = input<Article>();

  deleteCard = output<number>();

  isFavorite = signal(false);

  toggleFavorite() {
    this.isFavorite.set(!this.isFavorite());
  }

  emitDelete(id: number) {
    this.deleteCard.emit(id);
  }
}
