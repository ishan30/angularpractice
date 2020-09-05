import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template : `<h2>User template</h2>`,
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userName : string;
  constructor() { }

  ngOnInit(): void {
    // this.loadData();
    // this.userName = 'Amar';
  }

  // loadData() ;
}
