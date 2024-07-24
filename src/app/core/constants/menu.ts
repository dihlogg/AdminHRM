import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'Nfts', route: '/dashboard/nfts' },
            // { label: 'Podcast', route: '/dashboard/podcast' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Pim',
          route: '/pim',
          children: [
            { label: 'List Employee', route: '/pim/list-employee' },
            { label: 'Add Employee', route: '/pim/add-employee' },
            { label: 'Info Employee', route: '/pim/info-employee' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
        // {
        //   icon: 'assets/icons/heroicons/outline/shield-exclamation.svg',
        //   label: 'Erros',
        //   route: '/errors',
        //   children: [
        //     { label: '404', route: '/errors/404' },
        //     { label: '500', route: '/errors/500' },
        //   ],
        // },
        {
          icon: 'assets/icons/heroicons/outline/dots-horizontal.svg',
          label: 'Leave',
          route: '/leave',
        },
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Time',
          route: '/time',
        },
        {
          icon: 'assets/icons/heroicons/outline/menu.svg',
          label: 'Social',
          route: '/social',
        },
        {
          icon: 'assets/icons/heroicons/outline/user-circle.svg',
          label: 'My Info',
          route: '/info',
        },
        {
          icon: 'assets/icons/heroicons/outline/bookmark.svg',
          label: 'Performance',
          route: '/performance',
        },
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'Directory',
          route: '/directory',
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        // {
        //   icon: 'assets/icons/heroicons/outline/folder.svg',
        //   label: 'Folders',
        //   route: '/folders',
        //   children: [
        //     { label: 'Current Files', route: '/folders/current-files' },
        //     { label: 'Downloads', route: '/folders/download' },
        //     { label: 'Trash', route: '/folders/trash' },
        //   ],
        // },
      ],
    },
  ];
}
