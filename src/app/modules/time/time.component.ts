import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  standalone: true,
  imports: [RouterOutlet],
})
export class TimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
