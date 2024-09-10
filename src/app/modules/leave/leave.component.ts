import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../layout/components/navbar/navbar.component";
import { LeaveNavbarComponent } from "./pages/leave-navbar/leave-navbar.component";

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LeaveNavbarComponent],
})
export class LeaveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
