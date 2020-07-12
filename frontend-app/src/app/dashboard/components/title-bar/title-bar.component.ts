import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'bike-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  title: string = 'Bicycle';

  @ViewChild('commandSettings')
  commandSettings: ElementRef;

  @ViewChild('commandErrors')
  commandErrors: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  settingsOpen(): void {
    console.log('> debug: open setting popup')
  }

  errorsOpen(): void {
    console.log('> debug: open error popup');
  }
}
