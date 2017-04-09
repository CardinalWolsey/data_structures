//singly linked list with stack implementation
//TODO: write tests for these constructors and methods

var Node = function(value, next) {
  this.value = value;
  this.next = next;
}

var LinkedList = function(items) {
  var head = items.length ? new Node(items[0], null) : null;

  var current = head;
  for (var i = 1; i < items.length; i++) {
    current.next = new Node(items[i], null);
    current = current.next;
  }
  this.head = head;
};

LinkedList.prototype.at = function(index) {
  var current = this.head;
  for (var i = 0; i < index && current; i++) {
    current = current.next;
  }
  return current && current.value;
};


LinkedList.prototype.append = function(items) {
  //Assumes a linked list of at least one node
  var current = this.head;

  while(current.next) {
    current = current.next;
  }

  for (var i = 0; i < items.length; i++) {
    current.next = new Node(items[i], null)
    current = current.next;
  }

  return this.head;
}

LinkedList.prototype.prepend = function(items) {
  var current = this.head

  for (var i = items.length - 1; i >= 0; i--) {
    var newNode = new Node(items[i], current);
    current = newNode;
  }

  this.head = current;
  return this.head;
};

LinkedList.prototype.includes = function(item) {
  var current = this.head;

  while(current) {
    if(item === current.value) {
      return true;
    }
    current = current.next;
  }
  return false;
}

LinkedList.prototype.forEach = function(callback) {
  var current = this.head;

  while(current) {
    callback(current.value);
    current = current.next;
  }
};

LinkedList.prototype.removeAt = function(index) {
  var current = this.head;
  var previous = null;

  if (index < 0) {
    return null;
  }

  if(index === 0) {
    this.head = current.next;
    return this.head;
  }

  for (var i = 0; i < index; i++) {
    previous = current;
    current = current.next;
    if (current === null) {
      return null;
    }
  }

  previous.next = current.next;
  current = null;
  return this.head;
};

LinkedList.prototype.removeValue = function(value) {
  //TODO: fix this method and make it work
  var current = this.head;
  var previous = null

  while (current) {
    if (this.head.value === value) {
      this.head = this.head.next;
      current = this.head;
      previous = current;
    } else if (current.value === value) {

    } else {
      current = current.next
    }
  }


  while(current) {
    if(current.value === value) {
      console.log('match');
    }
    current = current.next;
  }

  // while (current) {
  //   if (current.value === value) {
  //     previous['next'] = current.next;
  //     current = null;
  //     current = previous.next.next;
  //   } else {
  //     current = current.next
  //   }
  // }
  return this.head
}

LinkedList.prototype.push = function(item) {
  if (this.head === undefined || this.head === null) {
    var head = item ? new Node(item, null) : null;
    this.head = head;
    return this.head;
  } else {
    var current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = new Node(item, null);
    return this.head;
  }
};

LinkedList.prototype.pop = function() {
  //if there are 0 nodes
  if(this.head === undefined) {
    return null;
  } else {
    var current = this.head;

    //if there are two or more nodes
    if(current.next) {
      var previous = null;
      while(current.next) {
        previous = current;
        current = current.next
      }
      var endValue = current.value;
      previous.next = null;
      return endValue;
    }

    //if there is only one node
    var endValue = current.value;
    this.head = null;
    return endValue;
  }
};

LinkedList.prototype.peek = function() {
  if(this.head === undefined || this.head === null) {
    return null;
  } else {
    var current = this.head;
    while(current.next) {
      current = current.next;
    }
    return current;
  }
};

function Stack() {
  var stack = new LinkedList([null]);

  this.push = stack.push.bind(stack);
  this.pop = stack.pop.bind(stack);
  this.peek = stack.peek.bind(stack);
};


var stack = new Stack();

var array = [2, 2, 2, 2, 3, 3, 2, 5];
var one = new LinkedList(array);
