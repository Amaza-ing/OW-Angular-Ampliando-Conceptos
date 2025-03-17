import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-recommendations-banner',
  imports: [RouterLink, MatButtonModule, MatCardModule],
  templateUrl: './recommendations-banner.component.html',
  styleUrl: './recommendations-banner.component.css',
})
export class RecommendationsBannerComponent {
  constructor(public articleService: ArticleService) {}
}
