import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-recommendations-banner',
  imports: [],
  templateUrl: './recommendations-banner.component.html',
  styleUrl: './recommendations-banner.component.css'
})
export class RecommendationsBannerComponent {
  constructor(public articleService: ArticleService) {}
}
