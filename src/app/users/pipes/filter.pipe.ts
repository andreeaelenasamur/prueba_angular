import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';
import { UserFilter } from '../interfaces/user-filter';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(userList: User[], args: UserFilter): User[] {
    if(!userList || userList.length <= 0 || Object.values(args).filter(val => !!val).length <= 0) {
      return userList;
    }

    let users: User[] = [...userList];

    if(args.name) {
      users = users.filter(user => user.name.includes(args.name!))
    }

    if(args.email) {
      users = users.filter(user => user.email.includes(args.email!))
    }

    if(args.surnames) {
      users = users.filter(user => user.surname1.includes(args.surnames!) || user.surname2.includes(args.surnames!))
    }

    console.log(users)

    return users;
  }

}
