import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css'],
  standalone: true,
  imports: [RouterOutlet],
})
export class PerformanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
