var BinarySearchTree = function(value){
  this.value = value;
  this.left = undefined;
  this.right = undefined;


};
//O(log n)
BinarySearchTree.prototype.insert = function(value){
  var parent;
  if (!arguments[1]) {
    parent = this;
  } else {
    parent = arguments[1];
  }
  if (parent.value > value && !parent.left) {
    parent.left = new BinarySearchTree(value);
  }
  if (parent.value < value && !parent.right) {
    parent.right = new BinarySearchTree(value);
  }
  if(parent.value > value){
    parent.insert(value, parent.left);
  }
  if(parent.value < value){
    parent.insert(value, parent.right);
  }
};
//O(log n)
BinarySearchTree.prototype.contains = function(target){
  var parent;
  var bool = false;
  if(!arguments[1]){
    parent = this;
  } else{
    parent = arguments[1];
  }
  if(parent.value === target){
    return true;
  }
  if(parent.value > target && parent.left){
    bool = parent.contains(target, parent.left);
  }
  if(parent.value < target && parent.right){
    bool = parent.contains(target, parent.right);
  }
  return bool;
};
//O(log n)
BinarySearchTree.prototype.depthFirstLog = function(cb){
  var parent;
  if (!arguments[1]) {
    parent = this;
  } else {
    parent = arguments[1];
  }
  cb(parent.value);
  if(parent.right) {
    parent.depthFirstLog(cb, parent.right);
  }
  if(parent.left) {
    parent.depthFirstLog(cb, parent.left);
  }

};
BinarySearchTree.prototype.breadthFirstLog = function(target, left, right){
  //Visit level by level. Starting with the root value
  //We will work on both left and right at the same time.
  //***Pseduo code
  //
  //Queue the node(s)
  var queue = Queue();
  var node;
  queue.enqueue(this);
  //while(queue ! empty)
  while(!queue.size){
    node =  queue.();

  }
  // if node value equals target
  //  return true
  // assign node to a value
  // pop the node out
  // if node child is not undefine
  //  push the in node child
  //



};

/*
 * Complexity: What is the time complexity of the above functions?
 */
