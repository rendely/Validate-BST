class Node {
  constructor(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  
  // check if this node is balanced, if not, return false
  if (!!root.left && root.left.val > root.val) return false
  if (!!root.right && root.right.val < root.val) return false
  
  // if left node exists, check if it's balanced
  if (root.left) {
   const checkLeft = isValidBST(root.left);
   if (!checkLeft) return false
  }

  // if right node exists, check if it's balanced
  if (root.right) {
    const checkRight = isValidBST(root.right);
    if (!checkRight) return false
  }

  // return true if all checks passed to this point
  return true
}

if (require.main === module) {

// add your own tests in here
const T = (v, l, r) => new Node(v, l, r)

console.log("Expecting: true");
console.log("=>", isValidBST(T(2, T(1), T(3))));

console.log("Expecting: false");
console.log("=>", isValidBST(T(2, T(4), T(0))));

}

module.exports = {
  isValidBST,
  Node
}

// Please add your pseudocode to this file
// And a written explanation of your solution