import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
})
export class ApplyComponent implements OnInit {
  jobId = this.route.snapshot.paramMap.get('slug');
  jobRoute = '/jobs/' + this.jobId;

  // job$ = this.srs.available$.pipe(
  //   map((routeList) =>
  //     routeList.filter((route: ScullyRoute) =>
  //       route.route.startsWith(this.jobRoute)
  //     )
  //   )
  // );

  constructor(
    private route: ActivatedRoute,
    private srs: ScullyRoutesService
  ) {}

  ngOnInit(): void {}
}
