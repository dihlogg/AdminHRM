import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AdminMenuService {
  public adminMenu: MenuItem[] = [
    {
      label: 'User Management',
      routerLink: '/admin/usermanagement',
      group: 'User Management',
      active: true,
      selected: true,
    },
    // {
    //   label: 'Leave List',
    //   routerLink: '/leave/list-leave',
    //   group: 'List Leave',
    //   active: false,
    //   selected: false,
    // },
  ];

  constructor() {}
}
