import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileImgComponent } from './components/shared/profile-img/profile-img.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialMediaComponent } from './components/shared/social-media/social-media.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    HeaderComponent,
    ProfileImgComponent,
    NavbarComponent,
    SocialMediaComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
