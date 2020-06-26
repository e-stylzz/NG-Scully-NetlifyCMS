import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

declare var ng: any;

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class JobDetailsComponent implements OnInit {
  jobId = this.route.snapshot.paramMap.get('slug');
  jobRoute = '/jobs/' + this.jobId;

  job$ = this.srs.available$.pipe(
    map((routeList) =>
      routeList.filter((route: ScullyRoute) =>
        route.route.startsWith(this.jobRoute)
      )
    )
  );

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private srs: ScullyRoutesService
  ) {}

  ngOnInit(): void {}

  apply(id) {
    console.log('slug', id);

    let path = '/jobs/apply/' + this.jobId;
    console.log('path: ', path);
    this.router.navigate([path]);
  }
}
