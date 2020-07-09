import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bike-picture-bicycle',
  templateUrl: './picture-bicycle.component.html',
  styleUrls: ['./picture-bicycle.component.scss']
})
export class PictureBicycleComponent implements OnInit {

  @Input()
  color: string = '#999999';

  constructor() { }

  ngOnInit(): void {
  }

}
