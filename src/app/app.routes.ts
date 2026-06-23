import { Routes } from '@angular/router';


export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/welcome/welcome').then(m => m.Welcome)
	},
	{
		path: 'acerca-de-nosotros',
		loadComponent: () => import('./pages/about-us/about-us').then(m => m.AboutUs)
	},
	{
		path: 'programas',
		loadComponent: () => import('./pages/programs/programs').then(m => m.Programs)
	},
	{
		path: 'noticias',
		loadComponent: () => import('./pages/news/news').then(m => m.News)
	},
	{
		path: '**',
		redirectTo: ''
	}
];