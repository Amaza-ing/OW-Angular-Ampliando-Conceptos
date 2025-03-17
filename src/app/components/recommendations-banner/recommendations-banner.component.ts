import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recommendations-banner',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './recommendations-banner.component.html',
  styleUrl: './recommendations-banner.component.css',
})
export class RecommendationsBannerComponent {
  constructor(public articleService: ArticleService) {}
}
