import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
  standalone: true,
  imports: [RouterOutlet],
})
export class LeaveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
