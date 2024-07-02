import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  standalone: true,
  imports: [RouterOutlet],
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
