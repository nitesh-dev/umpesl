import { Component, signal, Type, ViewEncapsulation } from '@angular/core';
import { IconButton } from '../ui/icon-button/icon-button';

import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import {
  RdxAvatarFallbackDirective,
  RdxAvatarImageDirective,
  RdxAvatarRootDirective,
} from '@radix-ng/primitives/avatar';
import { HomeIcon } from '../ui/icons/home-icon';
import { ManageAccountsIcon } from '../ui/icons/manage-accounts-icon';
import { AssignmentIcon } from '../ui/icons/assignment-icon';
import { SourceNotesIcon } from '../ui/icons/source-notes-icon';
import { PermMediaIcon } from '../ui/icons/perm-media-icon';
import { NoteStackIcon } from '../ui/icons/note-stack-icon';
import { BusinessMessagesIcon } from '../ui/icons/business-messages-icon';
import { HelpCenterIcon } from '../ui/icons/help-center-icon';
import { LiveHelpIcon } from '../ui/icons/live-help-icon';
import { UnknownDocumentIcon } from '../ui/icons/unknown-document-icon';
import { NgComponentOutlet } from '@angular/common';
import { BadgeIcon } from '../ui/icons/badge-icon';

interface MenuItem {
  label: string;
  path: string;
  icon: Type<any>;
}

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive,
    RdxAvatarFallbackDirective,
    RdxAvatarImageDirective,
    RdxAvatarRootDirective,
    NgComponentOutlet,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Sidebar {
  user = {
    name: 'Ramesh Balakrishnan',
    role: 'PMO Manager',
    initials: 'RB',
  };

  topMenu: MenuItem[] = [
    { label: 'Home', icon: HomeIcon, path: '/dashboard/home' },
    { label: 'Accounts Centre', icon: ManageAccountsIcon, path: '/dashboard/accounts' },
  ];

  menu = [
    { label: 'Daily Progress Report', icon: AssignmentIcon, path: '/dashboard/dpr' },
    { label: 'DPR History', icon: SourceNotesIcon, path: '/dashboard/dpr-history' },
    { label: 'Field Documents', icon: PermMediaIcon, path: '/dashboard/field-docs' },
  ];

  adminMenu: MenuItem[] = [
    {
      label: 'Project Master Sheet',
      icon: NoteStackIcon,
      path: '/dashboard/admin/project-master',
    },
    {
      label: 'Client Dependency',
      icon: BusinessMessagesIcon,
      path: '/dashboard/admin/client-dependency',
    },
    { label: 'User Management', icon: BadgeIcon, path: '/dashboard/admin/users' },
  ];

  helpMenu: MenuItem[] = [
    { label: 'Help Guide', icon: HelpCenterIcon, path: '/dashboard/help/guide' },
    { label: 'Support Ticket', icon: LiveHelpIcon, path: '/dashboard/help/support' },
    { label: 'Training Resources', icon: UnknownDocumentIcon, path: '/dashboard/help/training' },
  ];

  logout() {
    // handle logout here
    console.log('User logged out');
  }
}
