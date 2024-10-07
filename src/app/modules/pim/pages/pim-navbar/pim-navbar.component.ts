import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';
import { PimMenuService } from 'src/app/modules/layout/services/pim-menu.service';
import { NgClass, NgFor } from '@angular/common';



@Component({
  selector: 'app-pim-navbar',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './pim-navbar.component.html',
  styleUrls: ['./pim-navbar.component.css']
})
export class PimNavbarComponent implements OnInit {

  constructor(
    public pimMenuService: PimMenuService,
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
    this.pimMenuService.pimMenu.forEach(m => m['selected'] = false);
    menu['selected'] = true;
  }

  private updateMenuState(): void {
    const currentUrl = this.router.url;
    this.pimMenuService.pimMenu.forEach(menu => {
      menu['selected'] = (menu['routerLink'] === currentUrl);
    });
  }

}
