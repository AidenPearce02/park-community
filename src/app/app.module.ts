import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { IntroComponent } from './components/pages/intro/intro.component';
import { FeedComponent } from './components/pages/feed/feed.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ReleaseAndPlanComponent } from './components/pages/release-and-plan/release-and-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    FeedComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    ReleaseAndPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
