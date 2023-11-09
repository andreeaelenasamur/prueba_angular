import { User } from "./user";

export interface UserPagination {
  list: User[];
  currentPage: number;
  itemsPerPage: number;
  lastPage: number;
}
