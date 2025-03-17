import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Article } from '../../models/Article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-form',
  imports: [ReactiveFormsModule],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.css',
})
export class ArticleFormComponent {
  articleForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl(''),
  });

  constructor(public articleService: ArticleService) {}

  handleSubmit() {
    const newArticle: Article = {
      ...(this.articleForm.value as Article),
      id: this.articleService.articles.length + 1,
    };
    console.log(newArticle);

    this.articleService.addArticle(newArticle);

    this.articleForm.reset();
  }
}
