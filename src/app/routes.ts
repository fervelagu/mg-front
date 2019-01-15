import { AppComponent } from './app.component'
import { Routes } from '@angular/router'
import { ReviewComponent } from './review/review.component'
import { NoteComponent } from './note/note.component'
import { ProfileComponent } from './profile/profile.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'home',  component: HomeComponent },
    { path:'reviews', 
        component: ReviewComponent,
        children: [{
            path: ':id',
            component: ReviewComponent
        }]
    },
    { path:'notes', 
        component: NoteComponent,
        children: [{
            path: ':id',
            component: NoteComponent
        }] 
    },
    { path:'profile', component: ProfileComponent},
]

