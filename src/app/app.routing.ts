
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';


const appRoutes: Routes = [
{
	path: '',
	redirectTo: '/activities',
	pathMatch: 'full'

},
{
	path: 'activities',
	component: ActivitiesComponent
}

];

export const routing = RouterModule.forRoot(appRoutes);
// export const routedComponents = [PublicActivitiesComponent, PrivateActivitiesComponent];
