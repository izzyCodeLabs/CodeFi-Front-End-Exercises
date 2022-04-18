import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  datacenters:Object = {Crystal: ['Balmung', 'Mateus'], Aether: ['Gilgamesh', 'Adamantoise']};

  constructor() { }

  ngOnInit(): void {
    this.getDatacenters();
  }

  async getDatacenters() {
    console.log("Fetching datacenter and world data...");
    await fetch('https://xivapi.com/servers/dc?private_key=9abb50f88ea24b48bf72530e02229a22ae72e2cab9ac4e70837eb2e885c62407')
      .then(response => response.json())
      .then(data => this.datacenters = data)
      .then(() => console.log(this.datacenters));
      console.log("Data fetched!");
  }

  log(val: any) {
    console.log(val);
  }
}
