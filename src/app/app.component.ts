import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RecommendationsBannerComponent } from './components/recommendations-banner/recommendations-banner.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RecommendationsBannerComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isDarkMode = true;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
