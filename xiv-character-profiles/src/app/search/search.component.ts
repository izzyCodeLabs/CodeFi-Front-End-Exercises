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
    fetch('http://example.com/movies.json')
      .then(response => response.json())
      .then(data => this.datacenters = data);

  }

}
