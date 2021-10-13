import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.all().subscribe(data => {
      this.users = data;
      console.log(data);
    })
  }

}
