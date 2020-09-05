import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {

  constructor() { }
  @Input() name : string;
  ngOnInit(): void {
  }

}
