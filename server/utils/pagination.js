function paginateResult(userList = [], currentPage, itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  return {
    list: userList.slice(startIndex, endIndex),
    currentPage,
    itemsPerPage,
    lastPage: Math.ceil(userList.length / itemsPerPage)
  };
}

module.exports = {
  paginateResult,
}
