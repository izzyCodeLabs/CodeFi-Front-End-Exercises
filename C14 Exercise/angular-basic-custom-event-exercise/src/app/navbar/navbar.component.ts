import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sendSearch = new EventEmitter<{search}>();

  constructor() { }

  ngOnInit(): void {
  }

  onSendSearch(newSearch:string) {
    this.sendSearch.emit(newSearch);
    console.log(`You sent ${newSearch}`)
  }
}
