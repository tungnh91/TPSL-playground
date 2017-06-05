const returnKthToLast = (list, k) => {
  if (!list) {
    throw new Error ('invalid list');
  }
  // 2 pointers, same start;
  let firstPointer = list;
  let secondPointer = list;
  //point the second one to k position
  for (let i = 0; i < k; ++i) {
    // slide for k amount of time
    secondPointer = secondPointer.next;
    if (!secondPointer) {
      throw new Error ('the list is not long enough');
    }
  }

  // when the sedond pointer ends, first pointer is the k position
  while (secondPointer.next) {
    secondPointer = secondPointer.next;
    firstPointer = firstPointer.next;
  }

  return firstPointer;
};
