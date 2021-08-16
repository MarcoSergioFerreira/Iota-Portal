import { Component, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MediaQueryService } from './services/mediaQuery/media-query.service';
import { NavbarService } from './services/navbar/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Iota-Portal';

  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;
  public autosize: boolean = false;
  public minimizeSideNav = false;
  public mode: 'over' | 'side' = 'over';

  constructor(
    public navbarService: NavbarService,
    public mediaQueryService: MediaQueryService
  ) { }

  public openSidenav(): void {
    this.navbarService.toggleSidenav(true);
  }

  public closeSidenav(): void {
    this.navbarService.toggleSidenav(false);
  }

  public toggleMinimizeSideNav(minimize: boolean): void {
    this.minimizeSideNav = minimize;
    this.autosize = true;
    setTimeout(() => this.autosize = false, 1);
  }
}
