import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() minimizeSidenav = new EventEmitter<boolean>();

  minimizeSidenavToggle = false;
  
  constructor(
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
  }

  public closeSidenav(): void {
    this.navbarService.toggleSidenav(false);
  }

  public toggleMinimizeSidenav(): void {
    this.minimizeSidenavToggle = !this.minimizeSidenavToggle
    this.minimizeSidenav.emit(this.minimizeSidenavToggle);
  }

  // TODO: implement logout
  public logout(): void {
    console.log("🚀 ~ file: sidenav.component.ts ~ line 31 ~ SidenavComponent ~ logout ~ logout")
  }
}
