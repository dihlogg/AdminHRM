import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LeaveMenuService } from 'src/app/modules/layout/services/leave-menu.service';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-leave-navbar',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './leave-navbar.component.html',
  styleUrls: ['./leave-navbar.component.scss'],
})
export class LeaveNavbarComponent implements OnInit {
  constructor(
    public leaveMenuService: LeaveMenuService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateMenuState();
    });

    this.updateMenuState();
  }

  public setSelected(menu: MenuItem): void {
    this.leaveMenuService.leaveMenu.forEach(m => m['selected'] = false);
    menu['selected'] = true;
  }

  private updateMenuState(): void {
    const currentUrl = this.router.url;
    this.leaveMenuService.leaveMenu.forEach(menu => {
      menu['selected'] = (menu['routerLink'] === currentUrl);
    });
  }
}
