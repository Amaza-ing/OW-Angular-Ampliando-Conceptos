import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';
import { RecommendationsBannerComponent } from './components/recommendations-banner/recommendations-banner.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BlogComponent, RecommendationsBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
