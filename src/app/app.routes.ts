import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'home', redirectTo: 'home' }
];
