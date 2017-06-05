// Write a function to remove duplicates from an unsorted linked list.
const removeDups = (list) => {
  if (!list) {
    return list;
  };
  let seen = new Set();
  // add head to the current set
  let currentNode = list;
  seen.add(currentNode.value);
  while (currentNode.next) {
    if (seen.has(currentNode.next.value)) {
      //skip
      currentNode.next = currentNode.next.next;
    } else {
      // track & don't skip
      seen.add(currentNode.next.value);
      currentNode = currentNode.next;
    }
  };
  return list;
};