import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loggedIn:boolean = false;

  /*loggedStatus() {
    if (this.loggedIn === true) {return 'logged in'} else { return 'logged out'}
  }*/
}
