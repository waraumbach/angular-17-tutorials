import { Routes } from '@angular/router';
import { PageComponent } from './components/page.component';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'pages/:id',
        component: PageComponent
    }

];
