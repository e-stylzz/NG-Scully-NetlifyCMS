import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersHomeComponent } from './careers-home/careers-home.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  {
    path: '',
    component: CareersHomeComponent,
  },
  {
    path: ':title',
    component: JobDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareersRoutingModule {}
