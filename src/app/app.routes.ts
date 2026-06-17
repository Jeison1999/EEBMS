import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { News } from './pages/news/news';
import { Programs } from './pages/programs/programs';


export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/welcome/welcome').then(m => m.Welcome)
	},
	{
		path: 'programas',
		component: Programs
	},
	{
		path: 'noticias',
		component: News
	},
	{
		path: '**',
		redirectTo: ''
	}
];