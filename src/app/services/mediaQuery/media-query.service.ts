import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaQueryService {

  private isMobile = new BehaviorSubject<boolean>(false);
  private isTablet = new BehaviorSubject<boolean>(false);
  private isDesktop = new BehaviorSubject<boolean>(false);

  constructor() {
    // we need to make sure we are in browser
    if (window) {
      const mobileMediaQueryList = window.matchMedia('(max-width: 767px)');
      const tabletMediaQueryList = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
      const desktopMediaQueryList = window.matchMedia('(min-width: 1025px)');
      // here we pass value to our ReplaySubject
      const mobileListener = (event: any) => this.isMobile.next(event.matches);
      const tabletListener = (event: any) => this.isTablet.next(event.matches);
      const desktopListener = (event: any) => this.isDesktop.next(event.matches);
      // run once and then add listener
      mobileListener(mobileMediaQueryList);
      tabletListener(tabletMediaQueryList);
      desktopListener(desktopMediaQueryList);

      mobileMediaQueryList.addEventListener('change', mobileListener);
      tabletMediaQueryList.addEventListener('change', tabletListener);
      desktopMediaQueryList.addEventListener('change', desktopListener);
    }
  }

  public get isMobile$(): Observable<boolean> {
    return this.isMobile.asObservable();
  }

  public get isTablet$(): Observable<boolean> {
    return this.isTablet.asObservable();
  }

  public get isDesktop$(): Observable<boolean> {
    return this.isDesktop.asObservable();
  }
}
