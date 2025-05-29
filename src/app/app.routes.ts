import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { AboutMeComponent } from './view/about-me/about-me.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { animation: 'HomePage' }},
    { path: 'about-me', component: AboutMeComponent, data: { animation: 'AboutMePage' }},
];
