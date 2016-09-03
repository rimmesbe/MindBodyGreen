import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './home/article.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
