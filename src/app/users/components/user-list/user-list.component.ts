import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { User } from '../../interfaces/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  userList: User[];
  form: FormGroup;

  constructor(private userDataSrv: UserDataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [undefined],
      email: [undefined, [Validators.email]],
      surnames: [undefined]
    });

    this.userDataSrv.getUserList().subscribe((data) => {
      this.userList = data;
    })
  }

}
