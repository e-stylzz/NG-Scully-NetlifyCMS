import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersHomeComponent } from './careers-home/careers-home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [CareersHomeComponent, JobDetailsComponent],
  imports: [CommonModule, CareersRoutingModule, ScullyLibModule],
})
export class CareersModule {}
