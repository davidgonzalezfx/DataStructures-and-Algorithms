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
    console.log(`Array = ${this.output}`);
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
}
let q1 = new Queue(5);
console.log(" ");
q1.printInfoInLine();
console.log(" ");
q1.enQueue(1)
q1.enQueue(2)
q1.enQueue(3)
q1.enQueue(4)
q1.enQueue(5)
q1.enQueue(6)
q1.printInfoInLine();