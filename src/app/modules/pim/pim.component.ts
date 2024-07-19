import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-pim',
    templateUrl: './pim.component.html',
    standalone: true,
    imports: [RouterOutlet],
})
export class PimComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}