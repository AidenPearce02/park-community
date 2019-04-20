import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './components/pages/intro/intro.component';
import { FeedComponent } from './components/pages/feed/feed.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'feed', component: FeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
