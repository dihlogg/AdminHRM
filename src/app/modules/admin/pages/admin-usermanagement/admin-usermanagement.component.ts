import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-admin-usermanagement',
  templateUrl: './admin-usermanagement.component.html',
  styleUrls: ['./admin-usermanagement.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    MenuModule,
    TableModule,
    ButtonModule,
    StyleClassModule,
    PanelMenuModule,
    ToggleButtonModule,
    PaginatorModule,
    RouterLink,
    InputTextModule,
    ToastModule,
    AdminNavbarComponent
],
})
export class AdminUsermanagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
