import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgClass, NgFor } from '@angular/common';
import { AdminMenuService } from './../../../layout/services/admin-menu.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css'],
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
})
export class AdminNavbarComponent implements OnInit {

  constructor( 
    public adminMenuService: AdminMenuService,
    private router: Router) { }

   ngOnInit(): void {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.updateMenuState();
      });
  
      this.updateMenuState();
    }
  
    public setSelected(menu: MenuItem): void {
      this.adminMenuService.adminMenu.forEach(m => m['selected'] = false);
      menu['selected'] = true;
    }
  
    private updateMenuState(): void {
      const currentUrl = this.router.url;
      this.adminMenuService.adminMenu.forEach(menu => {
        menu['selected'] = (menu['routerLink'] === currentUrl);
      });
    }
}
