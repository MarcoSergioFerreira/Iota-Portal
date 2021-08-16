import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  @Input() minimizeSidenav: boolean = false;

  public pageName: string | undefined = '';

  constructor(
    public navbarService: NavbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setPageName(this.router.url.toString())
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.setPageName(route.urlAfterRedirects);
      }
    });
  }

  // TODO: implement log out
  public logout(): void {
    console.log("🚀 ~ file: topnav.component.ts ~ line 17 ~ TopnavComponent ~ logOutUser ~ logOutUser")
  }

  private setPageName(route: string) {

    switch (route) {
      case '/dealing-instructions': {
        this.pageName = 'Dealing Instructions';
        break;
      }
      default: {
        this.pageName = 'Dashboard';
        break;
      }
    }
  }
}
