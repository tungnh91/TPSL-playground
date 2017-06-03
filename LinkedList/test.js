function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }

  let list = null;
  for (let i = arr.length - 1; i >= 0; --i) {
    list = createNode(arr[i], list);
  }

  return list;
}

function createNode(val, next) {
  return {
    val: val,
    next: next || null
  };
}

let s = arrayToLinkedList([1,2,3,4,5,6]);
s