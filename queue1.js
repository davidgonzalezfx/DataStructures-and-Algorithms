class Queue {
  constructor(SIZE) {
    this.SIZE = SIZE
    this.info = new Array()
    this.output = ""
  }
  printInfoInLine() {
    this.info.forEach(value => {
      this.output += " " + value;
    });
    console.log(`---`);
    console.log(`Array = ${this.output}`);
    console.log(`---`);
    this.output = ""
  }
  enQueue(value) {
    if (this.info[this.SIZE - 1]) {
      console.log(`${value} can not be inserted - Queue is full`);
    }
    else {
      this.info.push(value)
      console.log(`${value} was inserted in ${this.info.indexOf(value)} position`);
    }
  }
  deQueue() {
  if (!(this.info.length)) {
    console.log(`Queue is empty`);
  }
  else {
    console.log(`Value ${this.info[0]} deleted`);
    this.info.shift()
    if (this.info.length == 0) {
      console.log("The las item was deleted");
    }
  }
}

}
let q1 = new Queue(5);
q1.printInfoInLine();
q1.enQueue(1)
q1.enQueue(2)
q1.enQueue(3)
q1.enQueue(4)
q1.enQueue(5)
q1.printInfoInLine();
q1.deQueue()
q1.deQueue()
q1.enQueue(6)
q1.enQueue(7)
q1.printInfoInLine();
q1.enQueue(8)
q1.printInfoInLine();
q1.deQueue()
q1.deQueue()
q1.deQueue()
q1.deQueue()
q1.deQueue()
q1.printInfoInLine();
q1.deQueue()
q1.printInfoInLine();
