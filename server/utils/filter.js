function filterUser(userList, args) {
  let users = [...userList];

  if(args?.name) {
    users = users.filter(user => user.name.includes(args.name))
  }

  if(args?.email) {
    users = users.filter(user => user.email.includes(args.email))
  }

  if(args?.surnames) {
    users = users.filter(user => user.surname1.includes(args.surnames) || user.surname2.includes(args.surnames))
  }

  return users;
}

module.exports = { filterUser };
