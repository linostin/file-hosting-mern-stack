// * When the sort() function compares two values, it sends the values to the compare function,
// * and sorts the values according to the returned (negative, zero, positive) value.
// * If the result is negative a is sorted before b.
// * If the result is positive b is sorted before a.
// * If the result is 0 no changes are done with the sort order of the two values.

// * Sort Alphabetically

// ascending sort
const compareAsc = (sortValue) => {
  return (a, b) => {
    let valueA = a[sortValue].toLowerCase();
    let valueB = b[sortValue].toLowerCase();

    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;

    return 0;
  };
};

// descending sort
const compare = (sortValue, sortDirection) => {
  const order = sortDirection === "asc" ? 1 : -1;

  return (a, b) => {
    let valueA = a[sortValue].toLowerCase();
    let valueB = b[sortValue].toLowerCase();

    if (valueA < valueB) return order;
    if (valueA > valueB) return order;

    return 0;
  };
};

// sort function
export const arrayOfObjectsSort = (array, sortValue, sortDirection) => {
  console.log(array, sortValue, sortDirection);
  const newArray = array.slice();
  return newArray.sort(compare(sortValue, sortDirection));
};
