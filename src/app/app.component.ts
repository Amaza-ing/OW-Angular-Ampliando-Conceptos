import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
