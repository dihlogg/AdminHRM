import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  standalone: true,
  imports: [RouterOutlet],
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
