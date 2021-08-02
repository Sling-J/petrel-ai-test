const usePagination = (
  items: any[],
  itemsPerPage = 10,
  currentPage = 1
) => {
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  return {
    list: currentItems,
    total: items.length,
  }
}

export default usePagination
