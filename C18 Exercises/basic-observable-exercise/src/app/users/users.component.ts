import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:{id:number, name:string} = {id:1, name:'aba'};

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

  }

}
