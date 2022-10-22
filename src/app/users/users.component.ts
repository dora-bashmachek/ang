import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./users.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
//  name: string = 'alex'
// names: string[] = ['alex', 'bob', 'carl']
// myDate = new Date ( 2004, 10, 12)
// nameTmp: string = 'lovely'
users: User[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://reqres.in/api/users?page=2').subscribe((data:any)=>{
      this.users = data.data
      // console.log(data);
      
    });
  }

  // addName() {
  //   // alert('hi my love')
  //   this.names.push(this.nameTmp)
  //   this.nameTmp = ''
  // }
  // deleteName(idx: number) {
  //   this.names.splice(idx,1)
  // }
}
