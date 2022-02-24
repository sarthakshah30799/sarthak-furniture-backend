export function getOffset(currentPage = 1, listPerPage) {
  console.log("curresnt page", currentPage, listPerPage);
  const offset = (currentPage - 1) * listPerPage;
  console.log("offset", offset);
  return (currentPage - 1) * listPerPage;
}

export function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}
