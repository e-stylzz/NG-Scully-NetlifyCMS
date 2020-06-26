import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersHomeComponent } from './careers-home/careers-home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MaterialModule } from '../shared/material/material.module';
import { ApplyComponent } from './apply/apply.component';

@NgModule({
  declarations: [CareersHomeComponent, JobDetailsComponent, ApplyComponent],
  imports: [
    CommonModule,
    CareersRoutingModule,
    ScullyLibModule,
    MaterialModule,
  ],
})
export class CareersModule {}
