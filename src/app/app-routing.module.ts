import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {ContactComponent} from './contact/contact.component';
import {ArticleEditComponent} from './article/article-edit/article-edit.component';
import {ArticleListComponent} from './article/article-list/article-list.component';

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'article/edit/:id', component: ArticleEditComponent},
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
