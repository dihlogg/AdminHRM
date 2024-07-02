import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-pim',
  templateUrl: './pim.component.html',
  styleUrls: ['./pim.component.css'],
  standalone: true,
  imports: [RouterOutlet, ToolbarModule],
})
export class PimComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
