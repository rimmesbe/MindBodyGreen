import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'article-detail/:id', component: ArticleDetailComponent}
];

export const routing = RouterModule.forRoot(routes);
