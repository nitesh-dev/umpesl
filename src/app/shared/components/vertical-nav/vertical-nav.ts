import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

export interface NavItem {
  key: string;
  value: string;
}

@Component({
  selector: 'app-vertical-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './vertical-nav.html',
  styleUrl: './vertical-nav.scss',
})
export class VerticalNav implements OnInit {
  @Input() items: NavItem[] = [

  ];

  selected: NavItem | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Sync selected item with URL
    this.route.queryParams.subscribe((params) => {
      const pageKey = params['page'];
      const found = this.items.find((item) => item.key === pageKey);
      this.selected = found || this.items[0];
    });
  }
  onSelect(item: NavItem) {
    this.selected = item;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: item.key },
      queryParamsHandling: 'merge',
    });
  }
}
