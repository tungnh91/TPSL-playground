// Write a function to remove duplicates from an unsorted linked list.

function removeDups (list) => {
  // return input if falsy
  if (!list) {
    return list;
  }
  // create a set for all the seen nodes
  let seen = new Set();
  // initiate the starting point
  let node = list;
  // add head to the set 
  seen.add(node.val);
  //slide down the list
  while(node.next) {
    // if the next node exist in the set
    if (seen.has(node.next.val)) {
      //skip it 
      node.next = node.next.next;
    } else {
    // otherwise add it to the set
      seen.add(node.next.val);
      // then move on to the next one
      node = node.next;
    }
  }
  // return list, head will never change
  return list;
}
