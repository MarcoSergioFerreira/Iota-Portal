import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // TODO: implement log out
  public logout(): void {
    console.log("🚀 ~ file: topnav.component.ts ~ line 17 ~ TopnavComponent ~ logOutUser ~ logOutUser")
  }
}
