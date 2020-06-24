import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-careers-home',
  templateUrl: './careers-home.component.html',
  styleUrls: ['./careers-home.component.scss'],
})
export class CareersHomeComponent implements OnInit {
  jobs$ = this.srs.available$.pipe(
    map((routeList) =>
      routeList.filter((route: ScullyRoute) => route.route.startsWith(`/jobs/`))
    )
  );

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit(): void {}
}
