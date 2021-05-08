import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from './utils/federation-utils';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'calendar',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'calendar',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: 'CalendarModule',
      }).then((m) => m.CalendarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
