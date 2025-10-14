import { Component, signal } from '@angular/core';
import { IconButton } from '../ui/icon-button/icon-button';

import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import {
  RdxAvatarFallbackDirective,
  RdxAvatarImageDirective,
  RdxAvatarRootDirective,
} from '@radix-ng/primitives/avatar';
@Component({
  selector: 'app-sidebar',
  imports: [
    IconButton,
    RouterLink,
    RouterLinkActive,
    RdxAvatarFallbackDirective,
    RdxAvatarImageDirective,
    RdxAvatarRootDirective,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  user = {
    name: 'Ramesh Balakrishnan',
    role: 'PMO Manager',
    initials: 'RB',
  };

  topMenu = [
    { label: 'Home', icon: 'home.svg', path: '/dashboard/home' },
    { label: 'Accounts Centre', icon: 'manage_accounts.svg', path: '/dashboard/accounts' },
  ];

  menu = [
    { label: 'Daily Progress Report', icon: 'assignment.svg', path: '/dashboard/dpr' },
    { label: 'DPR History', icon: 'source_notes.svg', path: '/dashboard/dpr-history' },
    { label: 'Field Documents', icon: 'perm_media.svg', path: '/dashboard/field-docs' },
  ];

  adminMenu = [
    {
      label: 'Project Master Sheet',
      icon: 'note_stack.svg',
      path: '/dashboard/admin/project-master',
    },
    {
      label: 'Client Dependency',
      icon: 'business_messages.svg',
      path: '/dashboard/admin/client-dependency',
    },
    { label: 'User Management', icon: 'badge.svg', path: '/dashboard/admin/users' },
  ];

  helpMenu = [
    { label: 'Help Guide', icon: 'help_center.svg', path: '/dashboard/help/guide' },
    { label: 'Support Ticket', icon: 'live_help.svg', path: '/dashboard/help/support' },
    { label: 'Training Resources', icon: 'unknown_document.svg', path: '/dashboard/help/training' },
  ];

  logout() {
    // handle logout here
    console.log('User logged out');
  }
}
