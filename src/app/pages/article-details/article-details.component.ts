import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';

@Component({
  selector: 'app-article-details',
  imports: [ArticleCardComponent],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css',
})
export class ArticleDetailsComponent {
  articleId;
  selectedArticle;

  constructor(
    private route: ActivatedRoute,
    public articleService: ArticleService
  ) {
    this.articleId = route.snapshot.paramMap.get('id');
    this.selectedArticle = articleService.selectArticle(
      this.articleId as string
    );
  }

  deleteArticle() {
    if (this.selectedArticle)
      this.articleService.deleteArticle(this.selectedArticle.id);
    this.selectedArticle = this.articleService.selectArticle(
      this.articleId as string
    );
  }
}
