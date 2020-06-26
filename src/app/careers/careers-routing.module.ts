import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersHomeComponent } from './careers-home/careers-home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplyComponent } from './apply/apply.component';

const routes: Routes = [
  {
    path: '',
    component: CareersHomeComponent,
  },
  {
    path: ':slug',
    component: JobDetailsComponent,
  },
  {
    path: 'apply/:id',
    component: ApplyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareersRoutingModule {}
