import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class PimMenuService {
  public pimMenu: MenuItem[] = [
    {
      label: 'Employee List',
      routerLink: '/pim/list-employee',
      group: 'Employee List',
      active: true,
      selected: true,
    },
    {
      label: 'Add Employee',
      routerLink: '/pim/add-employee',
      group: 'Add Employee',
      active: false,
      selected: false,
    }
  ];

  constructor() {}
}
