import { Router } from '@angular/router';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService,
              private router: Router) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routerUrl(): string {
    return this.headerService.headerData.routeUrl
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
