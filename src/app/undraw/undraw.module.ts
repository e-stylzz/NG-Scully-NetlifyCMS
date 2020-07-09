import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [ResumeComponent],
  exports: [ResumeComponent],
  imports: [CommonModule],
})
export class UndrawModule {}
