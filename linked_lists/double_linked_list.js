function DoubleNode(value, next, previous) {
  this.value = value;
  this.next = next;
  this.previous = previous;
}

function DoubleLinkedList(items) {
  if(items === undefined || items === null) {
    var head = null;
    var current = head;
    this.head = head;
    this.tail = current;
  } else {
    var head = items.length ? new DoubleNode(items[0], null, null) : null;

    var current = head;
    for (var i = 1; i < items.length; i++) {
      current.next = new DoubleNode(items[i], null, current);
      current = current.next;
    }
    this.head = head;
    this.tail = current;
  }
}

DoubleLinkedList.prototype.at = function(index) {
  //enter a positive intiger to count from the beginning
  if(index >= 0) {
    var current = this.head;

    for (var i = 0; i < index; i++) {
      if(current.next) {
        current = current.next;
      }
    }
    return current.value;
  }

  //enter a negative intger to count from the end backward
  if(index < 0) {
    var current = this.tail;

    for (var i = -1; i > index; i--) {
      if(current.previous) {
        current = current.previous;
      }
    }
    return current.value;
  }
};

DoubleLinkedList.prototype.append = function(item) {
  if(this.tail) {
    var current = this.tail;
    current.next = new DoubleNode(item, null, current);
    this.tail = current.next;
  } else {
    var head = new DoubleNode(item, null, null);
    var current = head;
    this.head = head;
    this.tail = current;
  }
};

DoubleLinkedList.prototype.prepend = function(item) {
  if(this.head) {
    var current = this.head;
    current.previous = new DoubleNode(item, current, null);
    this.head = current.previous;
  } else {
    var head = new DoubleNode(item, null, null);
    var current = head;
    this.head = head;
    this.tail = current;
  }
};

DoubleLinkedList.prototype.dequeue = function() {
  if(this.head === null) {
    return null;
  }

  var current = this.head;
  if(current.next) {
    current.next.previous = null;
    this.head = current.next;

    return current.value;
  }

  this.head = null;
  return current.value;
};

DoubleLinkedList.prototype.insertAt = function(index, item) {
  if (index === 0) {
    var current = this.head;
    current.previous = new DoubleNode(item, current, null)
    this.head = current.previous;
  }

  if(index > 0) {
    var current = this.head;

    var counter = 0;
    while(current.next && (index > counter)) {
      current = current.next;
      counter++;
    }
    var newNode = new DoubleNode(item, current, current.previous);
    current.previous.next = newNode;
    current.previous = newNode;
  }

  //enter a negative intger to count from the end backward
  if(index < 0) {
    var current = this.tail;

    var counter = -1;
    while(current.previous && (index < counter)) {
      current = current.previous;
      counter--;
    }
    var newNode = new DoubleNode(item, current, current.previous);
    current.previous.next = newNode;
    current.previous = newNode;
  }

};

DoubleLinkedList.prototype.deleteAt = function(index) {
  if(index === 0) {
    var current = this.head;
    if(current.next) {
      current = current.next;
    }
    current.previous = null;
    this.head = current;
  }

  if(index === -1) {
    var current = this.tail;
    if(current.previous) {
      current = current.previous;
    }
    current.next = null;
    this.tail = current;
  }

  if(index > 0) {
    var current = this.head;

    var counter = 0;
    while(current.next && (index > counter)) {
      current = current.next;
      counter++;
    }

    current.previous.next = current.next;
    current.next.previous = current.previous;
    current = null;
  }

  if(index < -1) {
    var current = this.tail;

    var counter = -1
    while(current.previous && (index < counter)) {
      current = current.previous;
      current--;
    }

    current.previous.next = current.next;
    current.next.previous = current.previous;
    current = null;
  }
};

var double = new DoubleLinkedList([1, 2, 3, 4, 5]);

var doubleTwo = new DoubleLinkedList(null);
// console.log(doubleTwo);
// doubleTwo.prepend(5);
// doubleTwo.prepend(6);
// console.log(doubleTwo);

function Queue() {
  var queue = new DoubleLinkedList(null);

  this.enqueue = queue.append.bind(queue);
  this.dequeue = queue.dequeue.bind(queue);
  this.hasNext = function() {
    if (queue.head === null || queue.head === undefined) {
      return false;
    }
    if(queue.head.value) {
      return true;
    }
  };
}

var myQueue = new Queue();
myQueue.enqueue(8);

//TODO:won't enqueue after completely dequeued
