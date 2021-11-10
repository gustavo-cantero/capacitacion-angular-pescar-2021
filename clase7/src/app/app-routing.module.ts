import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllJokesComponent } from './all-jokes/all-jokes.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { DeactivateGuard } from './deactivate.guard';
import { HomeComponent } from './home/home.component';
import { LoggedInGuard } from './logged-in.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
  // { path: 'search', component: SearchComponent, canActivate: [LoggedInGuard], canDeactivate: [DeactivateGuard] },
  // { path: 'search/:query', component: SearchComponent, canActivate: [LoggedInGuard], canDeactivate: [DeactivateGuard] },
  // { path: 'book/:isbn', component: BookComponent, canActivate: [LoggedInGuard] },
  {
    path: 'books',
    component: SearchComponent,
    canActivate: [LoggedInGuard],
    canDeactivate: [DeactivateGuard]
  },
  {
    path: 'books/:query',
    component: SearchComponent,
    canActivate: [LoggedInGuard],
    canDeactivate: [DeactivateGuard],
    children: [
      { path: ':isbn', component: BookComponent }
    ]
  },
  { path: 'jokes', component: AllJokesComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
