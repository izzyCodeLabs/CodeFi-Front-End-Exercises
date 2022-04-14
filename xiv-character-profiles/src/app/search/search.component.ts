import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private datacenters:Object = {};

  constructor() { }

  ngOnInit(): void {
    //this.datacenters =
    fetch('https://xivapi.com/servers/dc')
      .then(response => response.json())
      .then(data => this.datacenters = data)
      .then(() => console.log(this.datacenters));

  }

}
