import { Component } from '@angular/core';
import { ArticleCardComponent } from "../article-card/article-card.component";

@Component({
  selector: 'app-blog',
  imports: [ArticleCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
