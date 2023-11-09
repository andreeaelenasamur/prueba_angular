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

  currentPage: number = 1;
  limit: number = 5;
  lastPage: number;

  constructor(
    private userDataSrv: UserDataService,
    private fb: FormBuilder
  ) {
    this.searchData();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      email: ['', [Validators.email]],
      surnames: ['']
    });
  }

  searchData() {
    this.userDataSrv.getUserList(this.currentPage, this.limit, this.form?.value)
    .subscribe(({list, lastPage}) => {
      this.userList = list;
      this.lastPage = lastPage;
    });
  }

  nextPage() {
    this.currentPage += 1;
    this.searchData();
  }

  previousPage() {
    this.currentPage -= 1;
    this.searchData();
  }

}
