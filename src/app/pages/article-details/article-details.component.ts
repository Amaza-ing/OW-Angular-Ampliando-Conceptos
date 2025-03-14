import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  imports: [],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent {
  articleId;

  constructor(private route: ActivatedRoute) {
    this.articleId = route.snapshot.paramMap.get("id");
  }
}
