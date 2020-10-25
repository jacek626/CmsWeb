import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {ContactComponent} from './contact/contact.component';
import {ArticleEditComponent} from './article/article-edit/article-edit.component';

const routes: Routes = [
  { path: 'article', component: ArticleComponent },
  { path: 'article/:id', component: ArticleEditComponent},
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
