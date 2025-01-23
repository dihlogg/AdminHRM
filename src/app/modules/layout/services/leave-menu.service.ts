import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class LeaveMenuService {
  public leaveMenu: MenuItem[] = [
    {
      label: 'Leave Dashboard',
      routerLink: '/leave/list-leave',
      group: 'Leave Dashboard',
      active: false,
      selected: false,
    },
    {
      label: 'My Leave',
      routerLink: '/leave/my-leave',
      group: 'My Leave',
      active: true,
      selected: true,
    },
    {
      label: 'Create New Leave',
      routerLink: '/leave/apply-leave',
      group: 'Create New Leave',
      active: false,
      selected: false,
    },
    {
      label: 'Receive Leave',
      routerLink: '/leave/receive-leave',
      group: 'Receive Leave',
      active: false,
      selected: false,
    },
  ];

  constructor() {}
}
