import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubAComponent } from './sub-a/sub-a.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'sub-a',
    children: [
      {
        path: '**',
        component: SubAComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
