import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  standalone: true,
  imports: [RouterOutlet],
})
export class DirectoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
