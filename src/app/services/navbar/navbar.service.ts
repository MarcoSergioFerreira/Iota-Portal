import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private showSidenav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }

  public get showSidenav$(): Observable<boolean> {
    return this.showSidenav.asObservable();
  }

  public toggleSidenav(showSidenav: boolean): void {
    this.showSidenav.next(showSidenav);
  }
}
