import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class LeaveMenuService {
  public leaveMenu: MenuItem[] = [
    {
      label: 'My Leave',
      routerLink: '/leave/my-leave',
      group: 'My Leave',
      active: true,
      selected: true,
    },
    {
      label: 'Apply Leave',
      routerLink: '/leave/apply-leave',
      group: 'Apply Leave',
      active: false,
      selected: false,
    },
    {
      label: 'Leave List',
      routerLink: '/leave/list-leave',
      group: 'List Leave',
      active: false,
      selected: false,
    },
  ];

  constructor() {}
}
