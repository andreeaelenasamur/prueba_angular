import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  userList: User[];

  constructor(private userDataSrv: UserDataService) {}

  ngOnInit(): void {
    this.userDataSrv.getUserList().subscribe((data) => {
      this.userList = data;
    })
  }

}
