import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../layout/components/navbar/navbar.component';
import { LeaveNavbarComponent } from '../leave/pages/leave-navbar/leave-navbar.component';
import { AdminNavbarComponent } from './pages/admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AdminNavbarComponent],
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
