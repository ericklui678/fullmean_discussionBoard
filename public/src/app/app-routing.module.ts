import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// remember to import components
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopicComponent } from './topic/topic.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'topic/:id', component: TopicComponent },
    { path: 'user/:id', component: UserComponent },
    { path: '**', redirectTo: ''},
  // { path: '', pathMatch: 'full', component: LandingComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'notes/private', component: NotesPrivateComponent },
  // { path: 'gohome', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
