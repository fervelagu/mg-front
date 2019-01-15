import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from "@angular/router"
import { routes} from './routes'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ReviewComponent } from './review/review.component'
import { ReviewsService } from './reviews.service';
import { NoteComponent } from './note/note.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component'
import { AngularMaterialModule } from '../shared/angular-material.module'
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewComponent,
    NoteComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [ReviewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
