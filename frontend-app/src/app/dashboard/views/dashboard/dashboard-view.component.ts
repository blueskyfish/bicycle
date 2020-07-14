import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'bike-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: [ './dashboard-view.component.scss' ]
})
export class DashboardViewComponent implements OnInit {

  paramMap$: Subscription;

  bicycleId: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramMap$ = this.route
      .paramMap
      .subscribe((paramMap) => {
        console.log('> debug: paramters =>', paramMap);
        this.bicycleId = parseInt(paramMap.get('bicycleId'));
      });

  }

}
